rem environment
set env=%1

rem cucumber tag
set tag=%2

rem set up common environment variables
set COMMON_CONFIG_FILE=env/common.env
set NODE_ENV=%env%

rem run cucumber tests & on failure run postcucumber
yarn run cucumber:%env% --profile %tag% || yarn run postcucumber