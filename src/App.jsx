import { useState } from 'react'
import FeedbackList from './FeedbackList'
import Feedback from './Feedback'
import './index.css'

function App() {
  const [feedbacks, setFeedbacks] = useState([])

  const handleFeedbackSubmit = (feedback)=>{
    setFeedbacks([...feedbacks,feedback]);
  };

  return (
    <div>
      <Feedback onSubmit={handleFeedbackSubmit}/>
      <FeedbackList feedbacks={feedbacks}/>
    </div>
  );
}

export default App
