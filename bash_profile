if [ -f ~/.bashrc ];
then
  source ~/.bashrc
fi

if [-f ~/.aliases];
then
  source ~/.aliases
fi

export LANG=en_US.UTF-8
export PATH="/usr/local/sbin:$PATH"

# Work
export NOSE_REDNOSE=1
export PYTHONWARNINGS=default
export CLICOLOR=1

# Rails
export RAILS_ENV=development

# Prompt customization
# First letter font color
# Second letter background color
DIR=Ex
SYM_LINK=fx
SOCKET=bx
PIPE=Dx
EXE=cx
BLOCK_SP=ed
CHAR_SP=ed
EXE_SUID=cx
EXE_GUID=cx
DIR_STICKY=xb
DIR_WO_STICKY=xb
export LSCOLORS=$DIR$SYM_LINK$SOCKET$PIPE$EXE$BLOCK_SP$CHAR_SP$EXE_SUID$EXE_GUID$DIR_STICKY$DIR_WO_STICKY

# Prompt
NO_COLOR='\e[0m'
BLUE='\e[0;34m'
MAGENTA='\e[0;35m'
WHITE='\e[0;37m'

PS1="\[$BLUE\\]\w \[$NO_COLOR\]\n\[$MAGENTA\]> \[$NO_COLOR\]"

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
