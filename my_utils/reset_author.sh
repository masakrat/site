
git filter-branch -f --env-filter "
    GIT_AUTHOR_NAME='masakrat'
    GIT_AUTHOR_EMAIL='noreply@masakrat'
    GIT_COMMITTER_NAME='masakrat'
    GIT_COMMITTER_EMAIL='noreply@masakrat'
  " HEAD