import React, { useState } from 'react';
import {COLORS, FONTS, SIZES, icons} from '../../constants'
import {Container, ContainerHeader, ContainerHeaderGeral,
      Text, Image, ContainerNeutro} from './styles'
import { FlatList, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import NavBar from '../../components/NavBar';






const Home = () => {

     //dummy date
     const confirmStatus = "C"
     const pendingStatus = "P"
     let categoriesData = [
          {
              id: 1,
              name: "Education",
              icon: icons.education,
              color: COLORS.yellow,
              expenses: [
                  {
                      id: 1,
                      title: "Tuition Fee",
                      description: "Tuition fee",
                      location: "ByProgrammers' tuition center",
                      total: 100.00,
                      status: pendingStatus
                  },
                  {
                      id: 2,
                      title: "Arduino",
                      description: "Hardward",
                      location: "ByProgrammers' tuition center",
                      total: 30.00,
                      status: pendingStatus
                  },
                  {
                      id: 3,
                      title: "Javascript Books",
                      description: "Javascript books",
                      location: "ByProgrammers' Book Store",
                      total: 20.00,
                      status: confirmStatus
                  },
                  {
                      id: 4,
                      title: "PHP Books",
                      description: "PHP books",
                      location: "ByProgrammers' Book Store",
                      total: 20.00,
                      status: confirmStatus
                  }
              ],
          },
          {
              id: 2,
              name: "Nutrition",
              icon: icons.food,
              color: COLORS.lightBlue,
              expenses: [
                  {
                      id: 5,
                      title: "Vitamins",
                      description: "Vitamin",
                      location: "ByProgrammers' Pharmacy",
                      total: 25.00,
                      status: pendingStatus,
                  },
  
                  {
                      id: 6,
                      title: "Protein powder",
                      description: "Protein",
                      location: "ByProgrammers' Pharmacy",
                      total: 50.00,
                      status: confirmStatus,
                  },
  
              ],
          },
          {
              id: 3,
              name: "Child",
              icon: icons.baby_car,
              color: COLORS.darkgreen,
              expenses: [
                  {
                      id: 7,
                      title: "Toys",
                      description: "toys",
                      location: "ByProgrammers' Toy Store",
                      total: 25.00,
                      status: confirmStatus,
                  },
                  {
                      id: 8,
                      title: "Baby Car Seat",
                      description: "Baby Car Seat",
                      location: "ByProgrammers' Baby Care Store",
                      total: 100.00,
                      status: pendingStatus,
                  },
                  {
                      id: 9,
                      title: "Pampers",
                      description: "Pampers",
                      location: "ByProgrammers' Supermarket",
                      total: 100.00,
                      status: pendingStatus,
                  },
                  {
                      id: 10,
                      title: "Baby T-Shirt",
                      description: "T-Shirt",
                      location: "ByProgrammers' Fashion Store",
                      total: 20.00,
                      status: pendingStatus,
                  },
              ],
          },
          {
              id: 4,
              name: "Beauty & Care",
              icon: icons.healthcare,
              color: COLORS.peach,
              expenses: [
                  {
                      id: 11,
                      title: "Skin Care product",
                      description: "skin care",
                      location: "ByProgrammers' Pharmacy",
                      total: 10.00,
                      status: pendingStatus,
                  },
                  {
                      id: 12,
                      title: "Lotion",
                      description: "Lotion",
                      location: "ByProgrammers' Pharmacy",
                      total: 50.00,
                      status: confirmStatus,
                  },
                  {
                      id: 13,
                      title: "Face Mask",
                      description: "Face Mask",
                      location: "ByProgrammers' Pharmacy",
                      total: 50.00,
                      status: pendingStatus,
                  },
                  {
                      id: 14,
                      title: "Sunscreen cream",
                      description: "Sunscreen cream",
                      location: "ByProgrammers' Pharmacy",
                      total: 50.00,
                      status: pendingStatus,
                  },
              ],
          },
          {
              id: 5,
              name: "Sports",
              icon: icons.sports_icon,
              color: COLORS.purple,
              expenses: [
                  {
                      id: 15,
                      title: "Gym Membership",
                      description: "Monthly Fee",
                      location: "ByProgrammers' Gym",
                      total: 45.00,
                      status: pendingStatus,
                  },
                  {
                      id: 16,
                      title: "Gloves",
                      description: "Gym Equipment",
                      location: "ByProgrammers' Gym",
                      total: 15.00,
                      status: confirmStatus,
                  },
              ],
          },
          {
              id: 6,
              name: "Clothing",
              icon: icons.cloth_icon,
              color: COLORS.red,
              expenses: [
                  {
                      id: 17,
                      title: "T-Shirt",
                      description: "Plain Color T-Shirt",
                      location: "ByProgrammers' Mall",
                      total: 20.00,
                      status: pendingStatus,
                  },
                  {
                      id: 18,
                      title: "Jeans",
                      description: "Blue Jeans",
                      location: "ByProgrammers' Mall",
                      total: 50.00,
                      status: confirmStatus,
                  },
              ],
          }
      ]

     const [categories, setCategories] = useState(categoriesData)
     const [viewMode, setViewMode] = useState("chart")
     const [selectedCategory, setSelectedCategory] = useState(null)

     function renderHeader(){
          return(
               <ContainerHeaderGeral style={{ paddingHorizontal: SIZES.padding, paddingVertical: SIZES.padding, backgroundColor:COLORS.white }}>
                    <ContainerNeutro>
                         <Text style={{ color: COLORS.primary, ...FONTS.h2}}>
                              My Expenses
                         </Text>
                         <Text style={{color: COLORS.darkgray, ...FONTS.h3}}>
                              Summary (private)
                         </Text>
                    </ContainerNeutro>
                    <ContainerNeutro style={{ flexDirection: 'row', marginTop: SIZES.padding, alignItems: 'center'}}>
                         <ContainerNeutro
                              style={{
                                   width: 50,
                                   height: 50,
                                   backgroundColor: COLORS.lightGray,
                                   borderRadius: 25,
                                   justifyContent: 'center',
                                   alignItems: 'center'
                              }}
                         >
                              <Image source={icons.calendar}
                                        style={{
                                             width: 20,
                                             height: 20,
                                             tintColor: COLORS.lightBlue
                                        }}
                                        />
                         </ContainerNeutro>
                     
                        <ContainerNeutro style={{marginLeft: SIZES.padding}}>
                              <Text style={{color: COLORS.primary, ...FONTS.h3}}>
                                   11 Nov, 2020
                              </Text>
                              <Text style={{...FONTS.body3, color: COLORS.darkgray}}>
                                   18% more than last month
                              </Text>
                         </ContainerNeutro>
                    </ContainerNeutro>
     
                   
               </ContainerHeaderGeral>
          )
     }
     
     function renderCategoryHeaderSection(){
          return(
               <ContainerNeutro style={{flexDirection: 'row', padding:SIZES.padding, justifyContent: 'space-between', alignItems: 'center'}}>
                    {/* title */}
                    <ContainerNeutro>
                         <Text style={{color: COLORS.primary, ...FONTS.h3}}>CATEGORIES</Text>
                         <Text style={{color: COLORS.primary, ...FONTS.h4}}>{categories.length} Total</Text>
                    </ContainerNeutro>
                    {/* buttons */}
                    <ContainerNeutro style={{flexDirection: 'row'}}>
                         <TouchableOpacity style={{alignItems: 'center', justifyContent:'center', height:50, width:50, backgroundColor: viewMode == "chart" ? COLORS.secondary: null, borderRadius:25}}
                              onPress={() => setViewMode('chart')}
                         >
                              <Image source={icons.chart} resizeMode="contain" style={{width:20, height:20, tintColor: viewMode === 'chart' ? COLORS.white : COLORS.darkgray}} />
                         </TouchableOpacity>
                         <TouchableOpacity style={{alignItems: 'center', justifyContent:'center', height:50, width:50, backgroundColor: viewMode == "list" ? COLORS.secondary: null, borderRadius:25}}
                          onPress={() => setViewMode('list')}
                         >
                              <Image source={icons.menu} resizeMode="contain" style={{width:20, height:20, tintColor: viewMode === 'list' ? COLORS.white : COLORS.darkgray}} />
                         </TouchableOpacity>
                    </ContainerNeutro>
               </ContainerNeutro>
          )
     }

     function renderCategoryList(){

          const  renderItem = ({item}) => {
               return(
                    <TouchableOpacity style={{flex: 1, flexDirection: 'row', 
                    margin:5, paddingVertical:  SIZES.radius,
                    paddingHorizontal: SIZES.padding,
                    borderRadius: 5,
                    backgroundColor: COLORS.white,
                    ...styles.shadow}}
                         onPress={() => setSelectedCategory(item)}
                    >
                         <Image 
                              source={item.icon}
                              style={{width:20, height: 20, tintColor: item.color,
                                     
                              }}

                         />
                         <Text style={{marginLeft: SIZES.base, color: COLORS.primary, ...FONTS.h4}} >{item.name}</Text>
                    </TouchableOpacity>
               )
          }

          return(
               <ContainerNeutro style={{paddingHorizontal: SIZES.padding - 5}}>
                    <ContainerNeutro>
                         <FlatList 
                              data={categories}
                              numColumns={2}
                              keyExtractor={item => String(item.id)}
                              renderItem={renderItem}
                           
                         />
                    </ContainerNeutro>
               </ContainerNeutro>
          )
     }

     return (
          <Container style={{ flex: 1, backgroundColor: COLORS.lightGray2}}>
               {/* NavBar section */}
               <NavBar />
               {/* Header section */}
               {renderHeader()}

               {/* Category Header Section */}
               {renderCategoryHeaderSection()}

               <ScrollView contentContainerStyle={{paddingBottom:60}} > 
                    {
                         viewMode == "list" &&
                         <ContainerNeutro>
                              {renderCategoryList()}
                         </ContainerNeutro>
                    }
               </ScrollView>

          </Container>
     )
}

const styles = StyleSheet.create({
     shadow: {
          shadowColor: "#000",
          shadowOffset: {
               width: 2,
               height: 2,
          },
          shadowOpacity:0.25,
          shadowRadius: 3.84,
          elevation:3
     }
})


export default Home;