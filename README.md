# Travel_Guide
Travel Guide is a website which helps its users to meet other people travelling to a common place. It also allows its users to create a travelling group with their known people, in order to better facilitate the travel proceedings.
The aim of this website is to allow its users to smoothly proceed with their travel needs. It works with the help of polls creating questions and answering them among the users registered for the travel journey.
##WORK DONE TILL NOW
1) ###USER AUTHENTHICATION : successfully created sign in sign up page allowing only the authenticated travellers to proceed with website. It further includes password hashing.
2) ###PROFILE PAGE: if the user is signed in the profile page gets updated.
3) ###DASHBOARD: -lists all the current trips -provides option of creating a trip -list the newly created trip -on clicking view trip a tour screen window is opened for elaborate description of travel journey -creating a trip further consists of adding members -on clicking friends option dropdown of all registered users is shown. If any user is clicked the details of that user from tourist collection gets added to place collection in the form of an array.
4) ###TOUR SCREEN: lists all the travel details
##MISSED OPPORTUNITY AND THEIR SUGGESTED SOLUTIONS
1)###DASHBOARD ADD TRIP FUNCTION: -Due to the lack of time, the add trip button in the dashboard page does not work, i.e. on clicking add trip the user is not added to the trip.
###SOLUTION- *When the user clicks add trip, currently we are sending the id of the place to the tourscreen page via href tag. Place id will help us fetch the trip details from the Place collection in our database. *We will also send the information about who is currently logged in(preferably via sessions). Using this we would fetch the logged in user's information from Tourist Collection and then push it into the friends array of the Place collection, thus successfully registering the user.
2)###Voting Polls: The Voting Polls in the tourscreen window is currently non functional. In my src folders, poll collection, poll.hbs and commented out codes show the efforts put in.
###SOLUTION*While creating Voting polls did offer an initial confusion, I believe with the elaboarate research done till now, by using Pusher API and form methods, this could be achieved as well. I will add a form option in the tourscreen where the user would be asked certain generic questions about the trip. The answers given would be the options to these question in the polls. *On clicking on polling Buttons the user would move to the polls window. *I have installed Pusher API, and using that I look forward to create real time polls. The answers to these polls would be updated on the tourscreen. - My Poll collection will have two arrays. Question Array and Answer array. Question array would store the list of questions asked to the user, and answer array would be the answers submitted by the user. * While the question array would be similar for each user the different answer array would help me to display the options for each submitted question.
3) ###Adding Profile Picture and Place Picture- I had worked on storing the pictures through files, via Multer. Due to time constraint, I have not yet completed it. It would be done in no time.
4) ###Making a beter profile- While my profile page at the moment does show their name, email and details; however it fails to display the list of trips the user is registered in. Once the Add trip option in the dashboard becomes functional that could be done quickly as well.
##Mistakes in My Project
1)###Lack Of Security - After not being able to succeed in introducing tokens and sessions in my project, my website unfortunately lacks security. Any hacker can get the user info, as currently it is being passed from one webpage to another without any encryption. This could be tackled after implementing Sessions and Cookiesin my website.
2)###Profile/Login/SignUP- The profile page displays user info only after logging in. Before that it shows an error that "CANNOT GET PROFILE". The profile page should be visible only after logging in, however cuurrently it is in my website even before registering.

While my project does surely have its hefty shares of mistakes, but each mistake that i have encountered while debugging, has helped me to tackle these situations in  a smoother fashion in order to not only create a better project but also helping me learn new things in the due course of it. The Travel_Guide project is my token of labour and passion, and it would achieve its complete functionally very soon.
