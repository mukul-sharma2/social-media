import './right.css'

import Button from '../../UI/button/Button'

function Rightbar(){
return(
    <div className="rightbar">
        <div className="card">
            <h3>Trending</h3>
            <p>#React</p>
            <p>#JavaScript</p>
            <p>#WebDevelopment</p>
        </div>
        <div className="card">
            <h3>Suggested Friends</h3>
            <p>Rahul <Button text='Follow' variant='follow '/></p>
            <p>Rahul <Button text='Follow' variant='follow '/></p>
            <p>Rahul <Button text='Follow' variant='follow '/></p>
            
        </div>
        <div className="card">
            <h3>Activity</h3>
            <p>like</p>
            <p>Comments</p>
            <p>Post</p>
        </div>
    </div>
)
}

export default Rightbar