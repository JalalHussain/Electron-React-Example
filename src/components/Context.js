import React, {Component} from 'react';
import {placeInfo, reviews, detailInfo, news } from '../data';
// import {insertNewUser} from '../components/database/realmSchemas'

const InfoContext = React.createContext();

class InfoProvider extends Component{

    state = {
        contacts: [],
        info: placeInfo,
        reviews: reviews,
        detailInfo: detailInfo,
        news: news
    }

    componentDidMount() {
        console.log("Did mount called");
        fetch('http://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then((data) => {
                this.setState({ contacts: data })
            })
            .catch(console.log);

        // const user = {name: "shahid", email:"shahid@in.ocm"}
        // insertNewUser(user).then(insertedUser => {
        //     console.log("user created");
        // }).catch((error) => {
        //     console.log("user creation failed");
        // });

    }

    getItem = id => {
        const item = this.state.info.find(item => item.id === id);
        return item;
    }

    handleDetail = id=>{
        const item = this.getItem(id);
        this.setState(() =>{
            return {
                detailInfo: item
            }
        } );
    }

    render() {
        return (
            <InfoContext.Provider  value={{
                info: this.state.info,
                contacts: this.state.contacts,
                reviews: this.state.reviews,
                maps: this.state.maps,
                headerTitle: this.state.headerTitle,
                headerSubTitle: this.state.headerSubTitle,
                headerText: this.state.headerText,
                detailInfo: this.state.detailInfo,
                news: this.state.news,
                name: this.state.name,
                avatar: this.state.avatar,
                comment: this.state.comment,
                handleDetail: this.handleDetail
            }}>
                {this.props.children}
            </InfoContext.Provider>

        );
    }
}
const InfoConsumer = InfoContext.Consumer;
export  {InfoProvider, InfoConsumer};
