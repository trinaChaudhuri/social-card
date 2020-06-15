import React from "react";
import Faker from "faker";
import "./social-card.css";
import Comments from './comments'
export default class SocialCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }
  componentDidMount() {
    for (let i = 0; i < 5; i++) {
      const user = {
        name: Faker.internet.userName(),
        avatar: Faker.internet.avatar(),
        image: Faker.random.image(),
      };
      this.setState((prevState) => ({
        users: [...prevState.users, user],
      }));
    }
  }
  renderCard = (user) => {
    return (
      <div className="container">
        {" "}
        <div className="row">
          <img className="avatar" src={user.avatar} alt="profile" key={user.avatar} />
          <div>
            <div className="profile_name" key={user.userName}>{user.userName}</div>
            <div>30 mins</div>
          </div>
        </div>
        <div>
          This is my social Card demo, using faker.js.
        </div>
        <img className="social-card" src={user.image} alt="social-card"  />
        <Comments />
      </div>
    );
  };
  render() {
    return (
    <div>

    <div>{this.state.users.map((user) => this.renderCard(user))}
    </div>
        
    </div>
    )
  }
}
