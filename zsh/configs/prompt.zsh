# modify the prompt to contain git branch name if applicable
git_prompt_info() {
  current_branch=$(git current-branch 2> /dev/null)
  if [[ -n $current_branch ]]; then
    echo " %{$fg_bold[red]%}"["$current_branch"]"%{$reset_color%}"
  fi
}
setopt promptsubst

PS1='%{$fg_bold[green]%}%n@%m:%{$fg_bold[blue]%}%~%{$reset_color%}$(git_prompt_info)
→ '
