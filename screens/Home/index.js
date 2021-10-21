import React, { useState } from 'react';
import {COLORS, FONTS, SIZES, icons} from '../../constants'
import {Container, ContainerHeader, ContainerHeaderGeral,
      Text, Image, ContainerNeutro} from './styles'
import { FlatList, ScrollView, StyleSheet, TouchableOpacity, Animated, SafeAreaView, Touchable } from 'react-native';
import NavBar from '../../components/NavBar';
import { useRef } from 'react';
import { VictoryPie } from 'victory-native';
import {Svg} from 'react-native-svg';
import * as Notifications from 'expo-notifications';




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
     const categoryListHeightAnimationValue = useRef(new Animated.Value(115)).current
     const [categories, setCategories] = useState(categoriesData)
     const [viewMode, setViewMode] = useState("chart")
     const [selectedCategory, setSelectedCategory] = useState(null)
     const [showMoreToggle, setShowMoreToggle] = useState(false)

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
                                   15 Out, 2021
                              </Text>
                              <Text style={{...FONTS.body3, color: COLORS.darkgray}}>
                                   14% more than last month
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
                    <Animated.View style={{height: categoryListHeightAnimationValue}}>
                         <FlatList 
                              scrollEnabled={false}
                              data={categories}
                              numColumns={2}
                              keyExtractor={item => String(item.id)}
                              renderItem={renderItem}
                           
                         />
                    </Animated.View>

                    <TouchableOpacity style={{
                         flexDirection: 'row',
                         marginVertical: SIZES.base,
                         justifyContent: 'center'
                    }} 
                    onPress={() => {
                         if(showMoreToggle){
                              Animated.timing(
                                   categoryListHeightAnimationValue,
                                   {
                                        toValue: 115,
                                        duration: 500,
                                        useNativeDriver:false
                                   }
                              ).start()
                         }else{
                              Animated.timing(
                                   categoryListHeightAnimationValue,
                                   {
                                        toValue: 175,
                                        duration: 500,
                                        useNativeDriver:false
                                   }
                              ).start()
                         }
                         setShowMoreToggle(!showMoreToggle);
                    }}>
                         <Text style={{...FONTS.body4}}>{!showMoreToggle ? 'More' : 'Less'}</Text>
                         <Image source={!showMoreToggle ? icons.down_arrow : icons.up_arrow} 
                              style={{marginLeft:5, width: 15, height: 15, alignSelf: 'center'}}
                         />
                    </TouchableOpacity>

               </ContainerNeutro>
          )
     }

     function renderIncomingExpressTitle() {
          return(
               <ContainerNeutro style={{padding: SIZES.padding, backgroundColor: COLORS.lightGray2 }}>
                    <Text style={{...FONTS.h3, color: COLORS.primary}}>Incoming Expenses</Text>
                    <Text style={{...FONTS.body4, color: COLORS.darkgray}}>12 Total</Text>
               </ContainerNeutro>
          )
     }
     function renderIncomingExpress() {

          const renderItem = ({item, index}) => {
               return(
                    <ContainerNeutro 
                         style={{
                              width: 250,
                              marginBottom: 10,
                              marginRight: SIZES.padding,
                              marginLeft: index == 0 ? SIZES.padding : 0,
                              borderRadius: SIZES.radius,
                              backgroundColor: COLORS.white,
                              ...styles.shadow
                         }}
                    >
                         <ContainerNeutro style={{flexDirection: 'row', padding:SIZES.padding, alignItems: 'center'}}>
                              <ContainerNeutro style={{
                                   height: 50,
                                   width: 50,
                                   borderRadius: 25,
                                   backgroundColor: COLORS.lightGray,
                                   alignItems:'center',
                                   justifyContent: 'center'
                              }}>
                                   <Image source={selectedCategory.icon}
                                        style={{
                                             width: 30,
                                             height: 30,
                                             tintColor: selectedCategory.color
                                        }}
                                   /> 
                              </ContainerNeutro>
                              <Text style={{...FONTS.h3, color: selectedCategory.color}}>
                                   {selectedCategory.name}</Text>
                         </ContainerNeutro>
                              {/* EXPENSES description */}
                         <ContainerNeutro>
                              <ContainerNeutro style={{padding: SIZES.padding}}>
                                        {/* TITLE AND DESCRIPTION */}
                                   <Text style={{...FONTS.h2}}>{item.title}</Text>
                                   <Text style={{...FONTS.body3, flexWrap: 'wrap', color: COLORS.darkgray}}>{item.description}</Text>
                                   
                                   {/* location */}
                              
                                   <Text style={{marginTop: SIZES.padding, ...FONTS.h4}}>Location</Text>
                                   <ContainerNeutro style={{flexDirection:'row'}}>
                                        <Image source={icons.pin} style={{
                                             width: 20,
                                             height: 20,
                                             tintColor: COLORS.darkgray,
                                             marginRight: 5
                                        }}/>
                                        <Text style={{marginBottom: SIZES.base, color: COLORS.darkgray, ...FONTS.body4}}>{item.location}</Text>
                                   </ContainerNeutro>

                              </ContainerNeutro>

                         </ContainerNeutro>

                         {/* PRICE */}
                         <ContainerNeutro style={{
                              height: 50,
                              alignItems: 'center',
                              justifyContent: 'center',
                              borderBottomStartRadius: SIZES.radius,
                              backgroundColor: selectedCategory.color
                         }}>
                              <Text style={{color: COLORS.white, ...FONTS.body3}}>CONFIRM {item.total.toFixed(2)} USD</Text>
                         </ContainerNeutro>

                    </ContainerNeutro>
                   

               )
          }

          let allExpenses = selectedCategory ? selectedCategory.expenses : [];
          //Filter pending expenses
          let incomingExpenses = allExpenses.filter(a => a.status == 'P')

          return(
            <ContainerNeutro>
                 {renderIncomingExpressTitle()}
                 {
                      incomingExpenses.length > 0 && 
                      <FlatList
                         
                         data={incomingExpenses}
                         keyExtractor={item => item.id.toString()}
                         renderItem={renderItem}
                         horizontal
                         showsHorizontalScrollIndicator={false}
                      />
                 }
                 {
                      incomingExpenses.length == 0 && 
                      <ContainerNeutro style={{alignItems: 'center', justifyContent: 'center', height: 300}}>
                           <Text style={{color: COLORS.primary, ...FONTS.h3 }}>No Record</Text>
                      </ContainerNeutro>
                 }
            </ContainerNeutro>
          )
     }

     function processCategoryDataToDisplay(){
          //FILTER EXPENSES WITH 'CONFIRMED' STATUS
          let chartData = categories.map((item) => {
               let confirmExpenses = item.expenses.filter(a => a.status == 'C');
               let total = confirmExpenses.reduce((a, b) => a + (b.total || 0), 0);

               return {
                    name: item.name,
                    y: total,
                    expenseCount: confirmExpenses.length,
                    color: item.color,
                    id: item.id
               }
          })

          //FILTER OUT CATEGORIES WITH NO DATA/EXPENSES
          let filterChartData = chartData.filter(a => a.y > 0);

          //calculate the total expenses
          let totalExpense = filterChartData.reduce((a, b) => a + (b.y || 0), 0);

          //CALCULATE PORCENTAGE AND REPOPULATE CHART DATA
          let finalChartData = filterChartData.map((item) => {
               let percentage = (item.y / totalExpense * 100).toFixed(0)
               return{
                    label: `${percentage}%`, 
                    y: Number(item.y),
                    expenseCount: item.expenseCount,
                    color: item.color,
                    name: item.name,
                    id: item.id
               }
          })

          return finalChartData;

     }


     function setSelectCategoryByName(name){
          let category = categories.filter(a => a.name == name)
          setSelectedCategory(category[0])
     }

     function renderChart(){

          let chartData = processCategoryDataToDisplay();
          let colorScales = chartData.map((item) => item.color);
          let totalExpenseCount = chartData.reduce((a, b) => a + (b.expenseCount || 0), 0)
          return(
               <ContainerNeutro style={{alignItems:'center', justifyContent:'center'}}>
                   <Svg width={SIZES.width} height={SIZES.width} style={{width: "100%", height: "auto"}}>

                    <VictoryPie
                    standalone={false} // Android workaround
                    data={chartData}
                    labels={(datum) => `${datum.y}`}
                    radius={({ datum }) => (selectedCategory && selectedCategory.name == datum.name) ? SIZES.width * 0.4 : SIZES.width * 0.4 - 10}
                    innerRadius={70}
                    labelRadius={({ innerRadius }) => (SIZES.width * 0.4 + innerRadius) / 2.5}
                    style={{
                         labels: { fill: "white", ...FONTS.body3 },
                         parent: {
                              ...styles.shadow
                         },
                    }}
                    width={SIZES.width}
                    height={SIZES.width}
                    colorScale={colorScales}
                    events={[{
                         target: "data",
                         eventHandlers: {
                              onPress: () => {
                                   return [{
                                        target: "labels",
                                        mutation: (props) => {
                                        let categoryName = chartData[props.index].name
                                        setSelectCategoryByName(categoryName)
                                        }
                                   }]
                              }
                         }
                    }]}

                    />
                    </Svg>
                    <ContainerNeutro style={{position: 'absolute', top:'40%', left: '41%' }}>
                         <Text style={{...FONTS.h1, textAlign: 'center'}}>{totalExpenseCount}</Text>
                         <Text style={{textAlign: 'center', ...FONTS.h3}}>Expenses</Text>
                    </ContainerNeutro>
               </ContainerNeutro>
          )
     }

     function renderExpenseSummary(){
          let data = processCategoryDataToDisplay();
          const renderItem = ({item}) => {
               return(
                    <TouchableOpacity style={{flexDirection:'row', height:40, paddingHorizontal:SIZES.radius,
                         borderRadius: 10,
                         backgroundColor: (selectedCategory && selectedCategory.name == item.name) ? item.color : COLORS.white
                    }} onPress={()=>{
                         let categoryName = item.name;
                         setSelectCategoryByName(categoryName);
                    }}>
                         {/* Name/Category */}
                         <ContainerNeutro style={{flex:1, flexDirection: 'row', alignItems: 'center'}}>
                              <ContainerNeutro style={{
                                   width:20,
                                   height: 20,
                                   backgroundColor:(selectedCategory && selectedCategory.name == item.name) ?  COLORS.white : item.color,
                                   borderRadius: 5,
                                   marginRight: 5
                              }}>
                              </ContainerNeutro>
                              <Text style={{marginLeft: SIZES.base,color: (selectedCategory && selectedCategory.name == item.name) ? COLORS.white : COLORS.primary}}>{item.name}</Text>
                         </ContainerNeutro>
                         <ContainerNeutro style={{justifyContent:'center'}}>
                              <Text style={{color: (selectedCategory && selectedCategory.name == item.name) ? COLORS.white : COLORS.primary, ...FONTS.h3}}>{item.y} USD - {item.label}</Text>
                         </ContainerNeutro>
                    </TouchableOpacity>
               )
          }
          return(
               <ContainerNeutro style={{padding: SIZES.padding}}> 
                   <FlatList 
                         data={data}
                         keyExtractor={item => String(item.id)}
                         renderItem={renderItem}
                   /> 
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

               <ScrollView contentContainerStyle={{paddingBottom:60}} style={{flex:1}}> 
                    {
                         viewMode == "list" &&
                         <ContainerNeutro >
                              {renderCategoryList()}
                              {renderIncomingExpress()}
                         </ContainerNeutro>
                    }
                    {
                         viewMode=='chart' && 
                         <ContainerNeutro>
                              {renderChart()}
                              {renderExpenseSummary()}
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