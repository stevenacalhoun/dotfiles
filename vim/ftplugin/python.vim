" Python editing settings
setlocal tabstop=4
setlocal expandtab
setlocal shiftwidth=4
setlocal softtabstop=4
setlocal textwidth=100

" Docstrings as comments
syn region Comment start=/"""/ end=/"""/

" Modified syntax highlighting
syn region FCall matchgroup=FName start='[[:alpha:]_]\i*\s*(' end=')' contains=FCall,FCallKeyword
syn match FCallKeyword /\i*\ze\s*=[^=]/ contained
hi FCallKeyword ctermfg=yellow
hi FName ctermfg=blue

let python_highlight_all=1
let python_highlight_file_headers_as_comments=1
augroup python
  au!
  autocmd FileType python set colorcolumn=100
augroup END
