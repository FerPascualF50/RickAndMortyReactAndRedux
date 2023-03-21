const reducer = (state, action) => {

  switch (action.type) {
    case 'SET_FAVORITE':
      return {
        ...state,
        favoriteCharacter: [...state.favoriteCharacter, action.payload],
      };
    case 'DELETE_FAVORITE':
      return {
        ...state,
        favoriteCharacter: state.favoriteCharacter.filter(
          (items) => items.data.id !== action.payload,
        ),
      };
    case 'SET_SECTION':
      return {
        ...state,
        sectionActive: action.payload,
      };
      default:
    return state;
  }
};

export default reducer;