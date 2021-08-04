import React from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";
import HorizontalList from "./HorizontalList";

const TechNews = ({data}) => {
    return <HorizontalList title="Tech News" data={data} />
}
export default TechNews;

const styles = StyleSheet.create({
    container: {
    }
});