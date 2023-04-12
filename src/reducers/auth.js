export default (state = { authData: null }, action) => {
    switch (action.type) {
      case "AUTH":
        localStorage.clear("chatPortfolioProfile");
        localStorage.setItem("chatPortfolioProfile", action.payload.profile);
        localStorage.setItem("chatPortfolioToken", action.payload.token);
  
        return { ...state, authData: action.payload };
      case "LOGOUT":
        localStorage.clear("chatPortfolioProfile");
        localStorage.clear("chatPortfolioToken");
  
        return { ...state, authData: null };
      default:
        return state;
    }
  };