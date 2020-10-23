
const initialState = {
  reviewCount: 0,
}

const ADD_REVIEWS = 'add_reviews';

const add_reviews = () => ({
  type: ADD_REVIEWS,
  payload: 1,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_REVIEWS:
      return Object.assign({}, state, {
        reviewCount: state.reviewCount + action.payload
      });

    default: return state
  }
};

export {reducer, add_reviews};