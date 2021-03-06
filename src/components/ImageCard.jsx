import React, {Component} from 'react';

class ImageCard extends Component {


    constructor(props) {
        super(props);
        this.imageRef = React.createRef();
        this.state = {spans: 1};
    }

    //C'est call juste apres le render
    componentDidMount() {
        
        this.imageRef.current.addEventListener('load', this.setSpans);

    }

    setSpans = () => {
        const height = this.imageRef.current.clientHeight;
        const spans = Math.ceil(height / 10 );
        this.setState({spans});
    }

    render () {
        
        const {alt_description, urls} = this.props.image;
        return (
            <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
                <img ref={this.imageRef} alt={alt_description} src={urls.regular} />
            </div>
        );
    }
}

export default ImageCard;