import { useParams } from "react-router-dom";
import React from "react";


function withParams(Component) {
    return props => <Component {...props} params={useParams()} />;
  }


class AboutBreed extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        breedInfo: {},
        DataisLoaded: false
    };
  }
  
  componentDidMount() {
    let { breedID, img } = this.props.params;
    fetch(`https://api.thedogapi.com/v1/breeds/${breedID}?api_key=live_mulj8Bdkc1SNLW6iR7LwVcd6LrE2mAbghOWCnCk5HJN7F0hXCn4MbIIOWxN5DHMX`)
    .then(response => response.json())
    .then(data => {
        this.setState(
            {
                breedInfo: {
                    name: data.name,
                    weight: data.weight.metric,
                    height: data.height.metric,
                    lifeDuration: data.life_span,
                    img: `https://cdn2.thedogapi.com/images/${img}.jpg`
                },
                DataisLoaded: true
            }
        )
    })
    .catch(err => console.throwError(err));
  }
  
   render() {
    const { DataisLoaded, breedInfo } = this.state;
  
    if (!DataisLoaded) return <div>
              <h1> Pleses wait some time.... </h1> </div> ;
    
    return (
      <div className="breed">
        <img alt="Пёсель" src={breedInfo.img} />
        <h2 className="breed__name">
            {breedInfo.name}
        </h2>
        <div className="breed__weight">
            <h4>Weight</h4>
            <span>{breedInfo.weight} kg</span>
        </div>
        <div className="breed__height">
            <h4>Height</h4>
            <span>{breedInfo.height} cm</span>
        </div>
        <div className="breed_lifetime">
            <h4>Lifetime</h4>
            <span>{breedInfo.lifeDuration}</span>
        </div>
      </div>
    );
   } 
}

export default withParams(AboutBreed);