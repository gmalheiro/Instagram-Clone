import React, { useState } from "react";
import { View, TextInput, Image,Text,Button } from "react-native";
import * as Yup from "yup";
import { Formik } from "formik";

const PLACEHOLDER_IMG =
  "https://img.icons8.com/sf-ultralight-filled/500/ffffff/gallery.png";

const uploadPostSchema = Yup.object().shape({
  imageUrl: Yup.string().url().required("A URL IS REQUIRED"),
  caption: Yup.string().max(2200, "Caption has reached the character limit"),
});

const FormikPostUploader = () => {
  const [thumbnailUrl, setThumbnailUrl] = useState(PLACEHOLDER_IMG);

  return (
    <Formik
      initialValues={{ caption: "", imageUrl: "" }}
      onSubmit={(values) => console.log(values)}
      validationSchema={uploadPostSchema}
      validateOnMount = {true}
    >
      {({
        handleBlur,
        handleChange,
        handleSubmit,
        values,
        errors,
        isValid,
      }) => (
        <>
          <View
            style={{
              margin: 20,
              justifyContent: "space-between",
              flexDirection: "row",
            }}
          >
            <Image
              source={{ uri: PLACEHOLDER_IMG }}
              style={{ width: 100, height: 100 }}
            />


           <View style={{flex:1,marginLeft:12}}> 
                <TextInput
                  style={{ color: "white", fontSize: 20 }}
                  placeholder="Write a caption..."
                  placeholderTextColor="gray"
                  multiline={true}
                  onChangeText={handleChange("caption")}
                  onBlur={handleBlur("caption")}
                  value={values.caption}
                />
            </View>
          </View>
          <View style={{height:1,backgroundColor:'#282a36',width:'100%'}}></View>
          <TextInput
            style={{ color: "white", fontSize: 18 }}
            placeholder="Enter image Url"
            placeholderTextColor="gray"
            onChangeText={handleChange("imageUrl")}
            onBlur={handleBlur("imageUrl")}
            value={values.imageUrl}
          />
          {errors.imageUrl && (
            <Text style={{fontSize: 10, color: 'red'}}>
                {errors.imageUrl}
            </Text>
          ) }

          <Button  onPress={handleSubmit} title='Share' disabled={isValid}  />
        </>
      )}
    </Formik>
  );
};

export default FormikPostUploader;
