export const SHOW_LOADING = "news/SHOW_LOADING";
export const HIDE_LOADING = "news/HIDE_LOADING";
export const LOAD_NEWS_FAILURE = "news/failure";
export const SET_LANG = "news/criteria/language";
export const SET_COUNTRY = "news/criteria/country";
export const SET_CATEGORY = "news/criteria/category";
export const LOAD_NEWS_DATA = "news/all";
export const LOAD_NEWS_BY_FILTER = "news/filter";
export const SET_NEWS_MODE = "news/mode";
export const SET_NEXT_PAGE = "news/pages";
export const REHYDRATE ="persist/REHYDRATE";

const API_KEY = process.env.REACT_APP_API_KEY;
const API_BASE_URL =  process.env.REACT_APP_BASE_URL;
const defaultLanguage = "en";
const defaultUri = "top-headlines";
const defaultCountry = "wd";
const defaultCategory = "trending";
const defaultPage = 1;


const intialState = {
  news: {
    trending:[],
    business:[],
    entertainment:[],
    general:[],
    health:[],
    science:[],
    sports:[],
    technology:[]
  },
  totalPages:undefined,
  sources: [],
  loading: true,
  error: undefined,
  params: {
    language: defaultLanguage,
    category: defaultCategory,
    country: defaultCountry,
    uri: defaultUri,
    page:defaultPage,
  }
};

export default (state = intialState, action) => {
  switch (action.type) {
    case SHOW_LOADING:
      return {
        ...state,
        loading: true
      };
    case HIDE_LOADING:
      return {
        ...state,
        loading: false
      };
    case LOAD_NEWS_DATA:
      const newsByCategory = [...state.news[action.data.category] ,...action.data.articles ];
      return {
        ...state,
        loading: false,
        error: null,
        news: Object.assign({}, state.news, { [action.data.category] : newsByCategory })
      };
    case LOAD_NEWS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error || 'Something wen wrong',
      };
    case SET_LANG: {
      return {
        ...state,
        params: Object.assign({}, state.params, { language: action.language })
      };
    }
    case SET_COUNTRY: {
      return {
        ...state,
        params: Object.assign({}, state.params, { country: action.country })
      };
    }
    case SET_CATEGORY: {
      return {
        ...state,
        params: Object.assign({}, state.params, { category: action.category })
      };
    }
    case SET_NEWS_MODE: {
      return {
        ...state,
        params: Object.assign({}, state.params, { uri: action.uri })
      };
    }
    case SET_NEXT_PAGE: {
      
      return {
        ...state,
        params: Object.assign({}, state.params, { page: ++state.params.page })
      };
    }
    case REHYDRATE: {
      return {...state,persistedState:action.payload};
    }
    default:
      return state;
  }
};

export const fetchNewsBegin = () => ({
  type: SHOW_LOADING
});

export const fetchNewsEnd = () => ({
  type: HIDE_LOADING
});

export const languageChangedTo = language => ({
  type: SET_LANG,
  language
});

export const countryChangedTo = country => ({
  type: SET_COUNTRY,
  country
});

export const categoryChangeTo = category => ({
  type: SET_CATEGORY,
  category
});

export const newsModeChagedTo = uri => ({
  type: SET_NEWS_MODE,
  uri
});

export const incrementPage = () => ({
  type: SET_NEXT_PAGE
});


export const fetchNewsSuccess = (articles,category) => {
  const data ={articles,category}
  return ({
      type: LOAD_NEWS_DATA,
      data
      })
};

export const fetchNewsFailure = error => ({
  type: LOAD_NEWS_FAILURE,
  error:error.message
});


export const fetchNews = (language, country, category, uri,page) => {
  return dispatch => {
    dispatch(fetchNewsBegin());
    return fetch(buileQuery(language, country, category, uri,page))
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        dispatch(fetchNewsSuccess(json.articles,category));
        return json.articles;
      })
      .catch(error => dispatch(fetchNewsFailure(error)));
  };
};

export const buileQuery = (
  language = defaultLanguage,
  country = defaultCountry,
  category = defaultCategory,
  uri = defaultUri,
  page= defaultPage,
) => {
  let NEWS_API_URL = `${API_BASE_URL}/${uri}?apiKey=${API_KEY}&language=${language}&page=${page}&pageSize=5`;
  if (country !== "wd") {
    NEWS_API_URL = `${NEWS_API_URL}&country=${country}`;
  }
  if (category !== defaultCategory) {
    NEWS_API_URL = `${NEWS_API_URL}&category=${category}`;
  }

  return NEWS_API_URL;
};

export const handleErrors = response => {
  if (response.status !== 200) {
    throw Error(response.statusText||response.message);
  }
  return response;
};
