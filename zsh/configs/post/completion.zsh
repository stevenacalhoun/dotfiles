# load our own completion functions
fpath=(~/.zsh/completion /usr/local/share/zsh/site-functions $fpath)

## I had to disable this for vdev, not really sure what I've lost by doing so
# completion
autoload -U compinit
compinit
