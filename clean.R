library(wfenexus)

url_kindergartens <- "slupsk/data-raw/kindergartens.json"

ci_get_data(url_kindergartens, "kindergartens.csv")


knitr::knit("slupsk/test_dashboard.Rmd")

print("Script successfully run!")
