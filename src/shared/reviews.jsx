import React from 'react';
import {connect} from 'react-redux';
import { add_reviews } from './reducers';

const reviewStyle = {width: 200, height: 100, backgroundColor: 'green', textAlign: 'center'};

const Reviews = (props) => {
   const { reviewCount, addReview } = props;

  return (
    <section>
      <h2> Reviews page </h2>

      <p style={reviewStyle}>Count of review: {reviewCount}</p>

      <button onClick={() => addReview()}>add review</button>

    </section>
  );
};

const mapStateToProps = (state) => (
  {reviewCount: state.reviewCount}
)

const mapDispatchToProps = (dispatch) => ({
  addReview: () => {
    dispatch(add_reviews())
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Reviews);