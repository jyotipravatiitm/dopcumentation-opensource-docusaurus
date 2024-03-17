#!/bin/bash

# Read the diff file path from the command line argument
DIFF_FILE="$1"

# Initialize an array to store the modified files
modified_files=()

# Parse the diff output and extract the modified files
while IFS= read -r line
do
    if [[ "$line" =~ ^diff\ --git\ a/ ]]; then
        file=$(echo "$line" | sed 's/^diff\ --git\ a\/\(.*\)\ b\/.*/\1/')
        modified_files+=("$file")
    fi
done < "$DIFF_FILE"

# Print the list of modified files
echo "Modified files:"
for file in "${modified_files[@]}"; do
    echo "- $file"
done

# Save the list of modified files to a file for later use
printf "%s\n" "${modified_files[@]}" > analysis-output.txt