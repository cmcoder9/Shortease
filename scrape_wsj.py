# Import Splinter, BeautifulSoup, and Pandas
from splinter import Browser
from bs4 import BeautifulSoup as soup
import pandas as pd
import datetime as dt
import finnhub


def scrape_all():
    # Initiate headless driver for deployment
    browser = Browser("chrome", executable_path="chromedriver", headless=True)
    client = pymongo.MongoClient("mongodb+srv://Shortease2021:kmWfnLz47thnG4t@cluster0.ofhmi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
    db = client.test
    Headline_List= wsj_news(browser)

    # Run all scraping functions and store results in a dictionary
    data = {
        "Headline": Headline_List,
        "Gamestop": GME_final,
        "VTSAX": VTSAX_final_df,
        "Amazon": AMZN_final_df,
        "DOGE": DOGE_final_df,
        "AMC": AMC_final_df,
        "Disney": DIS_final_df
    }

    # Stop webdriver and return data
    browser.quit()
    return data


def wsj_news(browser):

    # Scrape Mars News
    # Visit the mars nasa news site
    url = 'https://www.wsj.com/news/archive/years'
    browser.visit(url)

    # Convert the browser html to a soup object and then quit the browser
    html = browser.html
    soup = soup(html, 'html.parser')

    # Create an empty list to hold news headlines
    Headline_List = []

    # Navigate web page to pull first news headline
    Headline_0 = browser.links.find_by_href("/news/archive/2020/september").click()
    Headline_0_11 = browser.links.find_by_href("/news/archive/2020/09/11").click()
    WSJEx9_11 = browser.links.find_by_partial_text("Merck Covid-19 Vaccine")
    Headline_List.append(WSJEx9_11.text)
    browser.back()
    browser.back()

    # Navigate web page to pull second news headline
    Headline_1 = browser.links.find_by_href("/news/archive/2020/september").click()
    Headline_1_9_22 = browser.links.find_by_href("/news/archive/2020/09/22").click()
    WSJEx9_22 = browser.links.find_by_partial_text("CDC Advisory Panel")
    Headline_List.append(WSJEx9_22.text)
    browser.back()
    browser.back()

    # Navigate web page to pull third news headline
    Headline_2 = browser.links.find_by_href("/news/archive/2020/october").click()
    Headline_2_10_8 = browser.links.find_by_href("/news/archive/2020/10/08").click()
    WSJEx10_8 = browser.links.find_by_partial_text("Chip Company AMD")
    Headline_List.append(WSJEx10_8.text)
    browser.back()
    browser.back()

    # Navigate web page to pull fourth news headline
    Headline_3 = browser.links.find_by_href("/news/archive/2020/november").click()
    Headline_3_11_27 = browser.links.find_by_href("/news/archive/2020/11/27").click()
    WSJEx11_27 = browser.links.find_by_partial_text("GM Plans")
    Headline_List.append(WSJEx11_27.text)
    browser.back()
    browser.back()

    # Navigate web page to pull fifth news headline
    Headline_4 = browser.links.find_by_href("/news/archive/2020/december").click()
    Headline_4_12_9 = browser.links.find_by_href("/news/archive/2020/12/09").click()
    WSJEx12_9 = browser.links.find_by_partial_text("U.S. Supplies")
    Headline_List.append(WSJEx12_9.text)
    browser.back()
    browser.back()

    # Navigate web page to pull sixth news headline
    Headline_5 = browser.links.find_by_href("/news/archive/2020/december").click()
    Headline_5_12_23 = browser.links.find_by_href("/news/archive/2020/12/23").click()
    WSJEx12_23 = browser.links.find_by_partial_text("NBA Postpones")
    Headline_List.append(WSJEx12_23.text)
    browser.back()
    browser.back()

    # Navigate web page to pull seventh news headline
    Headline_6 = browser.links.find_by_href("/news/archive/2021/january").click()
    Headline_6_1_4 = browser.links.find_by_href("/news/archive/2021/01/04").click()
    WSJEx1_4= browser.links.find_by_partial_text("Sarah Jessica Parker")
    Headline_List.append(WSJEx1_4.text)
    browser.back()
    browser.back()

    # Navigate web page to pull eighth news headline
    Headline_7 = browser.links.find_by_href("/news/archive/2021/january").click()
    Headline_7_1_14 = browser.links.find_by_href("/news/archive/2021/01/14").click()
    WSJEx1_14= browser.links.find_by_partial_text("Trump Orders Military")
    Headline_List.append(WSJEx1_14.text)
    browser.back()
    browser.back()

    # Navigate web page to pull ninth news headline
    Headline_8 = browser.links.find_by_href("/news/archive/2021/january").click()
    Headline_8_1_25 = browser.links.find_by_href("/news/archive/2021/01/25").click()
    WSJEx1_25= browser.links.find_by_partial_text("Citadel")
    Headline_List.append(WSJEx1_25.text)
    browser.back()
    browser.back()

    # Navigate web page to pull tenth news headline
    Headline_9 = browser.links.find_by_href("/news/archive/2021/january").click()
    Headline_9_1_27 = browser.links.find_by_href("/news/archive/2021/01/27").click()
    WSJEx1_27= browser.links.find_by_partial_text("Biden Re-Examining")
    Headline_List.append(WSJEx1_27.text)
    browser.back()
    browser.back()

    # Navigate web page to pull eleventh news headline
    Headline_10 = browser.links.find_by_href("/news/archive/2021/january").click()
    Headline_10_1_28 = browser.links.find_by_href("/news/archive/2021/01/28").click()
    WSJEx1_28= browser.links.find_by_partial_text("The Reddit")
    Headline_List.append(WSJEx1_28.text)
    browser.back()
    browser.back()

    # Navigate web page to pull twelfth news headline
    Headline_11 = browser.links.find_by_href("/news/archive/2021/january").click()
    Headline_11_1_29 = browser.links.find_by_href("/news/archive/2021/01/29").click()
    WSJEx1_29= browser.links.find_by_partial_text("Robinhood, Facing Ire")
    Headline_List.append(WSJEx1_29.text)
    browser.back()
    browser.back()

    # Navigate web page to pull thirteenth news headline
    Headline_12 = browser.links.find_by_href("/news/archive/2021/february").click()
    Headline_12_2_2 = browser.links.find_by_href("/news/archive/2021/02/02").click()
    WSJEx2_2= browser.links.find_by_partial_text("Hackers Lurked")
    Headline_List.append(WSJEx2_2.text)
    browser.back()
    browser.back()

    # Navigate web page to pull fourteenth news headline
    Headline_13 = browser.links.find_by_href("/news/archive/2021/february").click()
    Headline_13_2_4 = browser.links.find_by_href("/news/archive/2021/02/04").click()
    WSJEx2_4 = browser.links.find_by_partial_text("Rolling Stone")
    Headline_List.append(WSJEx2_4.text)
    browser.back()
    browser.back()

    # Navigate web page to pull last news headline
    Headline_14 = browser.links.find_by_href("/news/archive/2021/february").click()
    Headline_14_2_5 = browser.links.find_by_href("/news/archive/2021/02/05").click()
    WSJEx2_5= browser.links.find_by_partial_text("The Long and Short")
    Headline_List.append(WSJEx2_5.text)

    # Add try/except for error handling
    #try:
        #slide_elem = news_soup.select_one("ul.item_list li.slide")
        # Use the parent element to find the first 'a' tag and save it as 'news_title'
        #news_title = slide_elem.find("div", class_="content_title").get_text()
        # Use the parent element to find the paragraph text
        #news_p = slide_elem.find("div", class_="article_teaser_body").get_text()

    #except AttributeError:
        #return None, None

    return Headline_List


def GME_final_df():
    # Pull in Gamestop data from finnhub
    data_GME = finnhub_client.stock_candles('GME', 'D', 1599886800, 1612159200)

    # Convert to Pandas Dataframe
    GME_new = pd.DataFrame(data_GME)

    # Clean up data frame (change timestamp to Y-M-D format)
    GME_series = pd.to_datetime(GME_new.t,unit = "s")

    # Merge the data frame with the cleaned series 
    GME_df = pd.merge(GME_new, GME_series, left_index = True, right_index = True)

    # Re-write the df with only the desired columns
    GME_update = GME_df[["c","h","l","o","v","t_y"]]

    # Give the column headings proper titles
    GME_final_df = GME_update.rename(columns={"c": "Closing_price", "h": "High_price", "l": "Low_price", "o": "Opening_price", "v": "Market_volume", "t_y": "Date"})
    GME_final = GME_final_df.to_dict('records')

    return GME_final

def VTSAX_final_df():
    # Pull in Vanguard S&P index data from finnhub
    data_VTSAX = finnhub_client.stock_candles('VTSAX', 'D', 1599886800, 1612159200)

    # Convert to Pandas Dataframe
    VTSAX_new = pd.DataFrame(data_VTSAX)

    # Clean up data frame (change timestamp to Y-M-D format)
    VTSAX_series = pd.to_datetime(VTSAX_new.t,unit = "s")
    VTSAX_series = pd.to_datetime(VTSAX_series.dt.date)

    # Merge the data frame with the cleaned series 
    VTSAX_df = pd.merge(VTSAX_new, VTSAX_series, left_index = True, right_index = True)

    # Re-write the df with only the desired columns
    VTSAX_update = VTSAX_df[["c","h","l","o","v","t_y"]]

    # Give the column headings proper titles
    VTSAX_final_df = VTSAX_update.rename(columns={"c": "Closing_price", "h": "High_price", "l": "Low_price", "o": "Opening_price", "v": "Market_volume", "t_y": "Date"})
    VTSAX_final_df

    # Convert dataframe into HTML format, add bootstrap
    return VTSAX_final_df


def AMZN_final_df():
    # Pull in Amazon data from finnhub
    data_AMZN = finnhub_client.stock_candles('AMZN', 'D', 1599886800, 1612159200)

    # Convert to Pandas Dataframe
    AMZN_new = pd.DataFrame(data_AMZN)

    # Clean up data frame (change timestamp to Y-M-D format)
    AMZN_series = pd.to_datetime(AMZN_new.t,unit = "s")

    # Merge the data frame with the cleaned series 
    AMZN_df = pd.merge(AMZN_new, AMZN_series, left_index = True, right_index = True)

    # Re-write the df with only the desired columns
    AMZN_update = AMZN_df[["c","h","l","o","v","t_y"]]

    # Give the column headings proper titles
    AMZN_final_df = AMZN_update.rename(columns={"c": "Closing_price", "h": "High_price", "l": "Low_price", "o": "Opening_price", "v": "Market_volume", "t_y": "Date"})
    AMZN_final_df

    return AMZN_final_df

def DOGE_final_df():
    # Pull in Dogecoin data from finnhub
    data_DOGE = finnhub_client.stock_candles('DOGE-USD', 'D', 1599886800, 1612159200)

    # Convert to Pandas Dataframe
    DOGE_new = pd.DataFrame(data_DOGE)

    # Clean up data frame (change timestamp to Y-M-D format)
    DOGE_series = pd.to_datetime(DOGE_new.t,unit = "s")
    DOGE_series = pd.to_datetime(DOGE_series.dt.date)

    # Merge the data frame with the cleaned series 
    DOGE_df = pd.merge(DOGE_new, DOGE_series, left_index = True, right_index = True)

    # Re-write the df with only the desired columns
    DOGE_update = DOGE_df[["c","h","l","o","v","t_y"]]

    # Give the column headings proper titles
    DOGE_final_df = DOGE_update.rename(columns={"c": "Closing_price", "h": "High_price", "l": "Low_price", "o": "Opening_price", "v": "Market_volume", "t_y": "Date"})
    DOGE_final_df

    return DOGE_final_df

def AMC_final_df():
    # Pull in AMC entertainment data from finnhub
    data_AMC = finnhub_client.stock_candles('AMC', 'D', 1599886800, 1612159200)

    # Convert to Pandas Dataframe
    AMC_new = pd.DataFrame(data_AMC)

    # Clean up data frame (change timestamp to Y-M-D format)
    AMC_series = pd.to_datetime(AMC_new.t,unit = "s")

    # Merge the data frame with the cleaned series 
    AMC_df = pd.merge(AMC_new, AMC_series, left_index = True, right_index = True)

    # Re-write the df with only the desired columns
    AMC_update = AMC_df[["c","h","l","o","v","t_y"]]

    # Give the column headings proper titles
    AMC_final_df = AMC_update.rename(columns={"c": "Closing_price", "h": "High_price", "l": "Low_price", "o": "Opening_price", "v": "Market_volume", "t_y": "Date"})
    AMC_final_df

    return AMC_final_df

def DIS_final_df():
    # Pull in Disney data from finnhub
    data_DIS = finnhub_client.stock_candles('DIS', 'D', 1599886800, 1612159200)

    # Convert to Pandas Dataframe
    DIS_new = pd.DataFrame(data_DIS)

    # Clean up data frame (change timestamp to Y-M-D format)
    DIS_series = pd.to_datetime(DIS_new.t,unit = "s")

    # Merge the data frame with the cleaned series 
    DIS_df = pd.merge(DIS_new, DIS_series, left_index = True, right_index = True)

    # Re-write the df with only the desired columns
    DIS_update = DIS_df[["c","h","l","o","v","t_y"]]

    # Give the column headings proper titles
    DIS_final_df = DIS_update.rename(columns={"c": "Closing_price", "h": "High_price", "l": "Low_price", "o": "Opening_price", "v": "Market_volume", "t_y": "Date"})
    DIS_final_df

    return DIS_final_df


if __name__ == "__main__":

    # If running as script, print scraped data
    print(scrape_all())
