import { Card } from 'antd';
import React from "react";
import { Link } from 'react-router-dom';

class Main extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        dogs: [],
        DataisLoaded: false
    };
  }
  
  componentDidMount() {
    const dogsArr = [];
    fetch(
      "https://api.thedogapi.com/v1/breeds?api_key=live_mulj8Bdkc1SNLW6iR7LwVcd6LrE2mAbghOWCnCk5HJN7F0hXCn4MbIIOWxN5DHMX"
      )
      .then(response => response.json())
      .then(data => {
        data.forEach(element => 
          dogsArr.push(
            {
              id: element.id,
              breed: element.name,
              img: element.image.url,
            }
          )
        );
      })
      .then(() => this.setState({
          dogs: dogsArr,
          DataisLoaded: true
        }))
      .catch(err => console.throwError(err));
  }
  
   render() {
    const { Meta } = Card;
    const { DataisLoaded, dogs } = this.state;
  
    if (!DataisLoaded) return <div>
              <h1> Pleses wait some time.... </h1> </div> ;
    
    return (
      <div className="App">
        {dogs.map((dog) =>
          <Link to={`/aboutBreed/${dog.id}/${dog.img.slice(34, 43)}`}
            key={dog.id}>
            <Card
              className='card'
              hoverable
              cover={<div className="img-container"><img alt="example" src={dog.img} /></div>}
              >
              <Meta title={dog.breed} />
            </Card>
          </Link>
        )}
      </div>
    );
   } 
}

export { Main }