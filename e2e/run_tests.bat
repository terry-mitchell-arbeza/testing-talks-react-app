rem cucumber tag
set tag=%1

rem set up common environment variables
set COMMON_CONFIG_FILE=env/common.env

rem run cucumber tests & on failure run postcucumber
yarn run cucumber --profile %tag% || yarn run postcucumber