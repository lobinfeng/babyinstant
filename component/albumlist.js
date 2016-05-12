import React from 'react';
import {
	Text,
	Image,
	StyleSheet,
	View
} from 'react-native';
export default class AlbumList extends React.Component {
	static propTypes = {
		name: React.PropTypes.string,
	};

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<View style = { styles.ImagesListContainer }>
				<Image 
					source = {{uri:'http://p1.s.hjfile.cn/thread/201208/2012081370438020_296_o.jpg' }} 
					style={{width: 400, height: 400}} 
				/>
				<Text>1111111111111</Text>
			</View>
			)
	}
}
	const styles = StyleSheet.create({
		ImagesListContainer:{
			
		}
	})