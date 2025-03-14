function FeedbackList({feedbacks})
{
    return(
        <div className="feedback-list">
            <h2>Submitted Feedback</h2>
            {
                feedbacks.length ===0 ? (<p>No feedback submitted yet !</p>) : (
                    feedbacks.map((feedback,index) => (
                        <div key={index} className="feedback-item">
                            <p><strong>{feedback.name}</strong> ({feedback.email})</p>
                            <p>{feedback.message}</p>
                        </div>

                    ))
                )
            }
        </div>
    );
}
export default FeedbackList;