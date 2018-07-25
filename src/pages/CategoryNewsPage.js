import React from "react";
import NewsFeederHeader from "../components//NewsFeederHeader";
import HeaderTitle from "../components/HeaderTitle";
import NewsFeedSettingIcon from "../components//NewsFeedSettingIcon";
import withNetworkStateListener from "../hoc/withNetworkStateListener";
import NewsPage from "./NewsPage";

const DetailHeader= (props) => (
  <NewsFeederHeader>
    <NewsFeedSettingIcon  goTo="/category" shouldHide={false} icon='keyboard_backspace' ></NewsFeedSettingIcon >
    <HeaderTitle header={props.header} />  
</NewsFeederHeader>
)


const CategoryNewsPage = (props) => (
  <React.Fragment>
    <DetailHeader header={props.match.params.category}/>
    <NewsPage category={props.match.params.category}></NewsPage>
  </React.Fragment>  
);

 export default CategoryNewsPage;