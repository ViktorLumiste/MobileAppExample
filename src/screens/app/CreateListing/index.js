import React, {useState} from "react";
import {View, Text, TouchableOpacity, Image, Pressable, ActivityIndicator, ScrollView} from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../../components/Header";
import Input from "../../../components/Input";
import { styles } from "./styles";

import {launchCamera, launchImageLibrary} from 'react-native-image-picker'
import Button from "../../../components/Button";
import KeyboardAvoidingView from "react-native/Libraries/Components/Keyboard/KeyboardAvoidingView";
import { categories } from "../../../data/categories";

const CreateListing = ({navigation}) =>{
    const [images, setImages] = useState([])
    const [loading, setLoading] = useState(false)
    const [values, setValues] = useState({})

    const goBack= () =>{
        navigation.goBack()
    }
    const uploadNewImage = async () =>{
        setLoading(true)
        const result = await launchImageLibrary()
        console.log(result)
        if(result?.assets?.length) {
            setImages(list => ([...list, ...result?.assets]))
            setLoading(false)
        }
        console.log(images)
    }
    const onDeleteImage = (image) =>{
        setImages((list)=>{
            const filteredImages = list.filter((img)=> img?.fileName !== image?.fileName)
            return filteredImages
        })
    }
    const onChange = (value, key) =>{
        setValues((val) =>({...val, [key]: value}))
    }

    return(
        <KeyboardAvoidingView>
            <Header showBack={true} onBackPress={goBack} title="Create a new listing" />
            <ScrollView style={styles.container}>
                <Text style={styles.sectionTitle}>Upload photos</Text>
                <View style={styles.imageRow}>
                    <TouchableOpacity style={styles.uploadContainer} onPress={uploadNewImage}>
                        <View style={styles.uploadCircle}>
                            <Text style={styles.uploadPlus} >+</Text>
                        </View>
                    </TouchableOpacity>
                    {images?.map(image=>(
                        <View key={image?.fileName} style={styles.imageContainer} >
                        <Image  style={styles.image} source={{uri:image?.uri}} />
                        <Pressable hitSlop={20} onPress={() => onDeleteImage(image)} >
                            <Image style={styles.delete} source={require('../../../assets/close.png')} />
                        </Pressable>
                        </View>
                        ))}
                        {loading ? (<ActivityIndicator />) : null}
                </View>
                <Input label="Title" placeholder="Listing Title" value={values.title} onChangetext={(v)=> onChange(v, 'title')} />
                <Input label="Category" placeholder="Select the category" value={values.category} type={"picker"} onChangeText={(v)=> onChange(v, 'category')} options={categories}/>
                <Input label="Price" placeholder="Enter price in USD" value={values.price} onChangetext={(v)=> onChange(v, 'price')} keyboardType="numeric" />
                <Input style={styles.textarea} label="Description" placeholder="Tell us more..." value={values.description} onChangetext={(v)=> onChange(v, 'description')} multiline/>
                <Button title="Submit"/>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

export default React.memo(CreateListing)