export const allProjects = [{
  id: 1,
  title: "Project One",
  description: "The first project.",
  goal: 150,
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBiZqcusG9Zso2DImkYWMDsIgB7MgDlz7XYkHABszLSk4qes1aG-zeb-EztZl_d_Zd-so&usqp=CAU",
  is_open: false,
  date_created: "2020-03-20T14:22:23.382748Z",
  owner: 1,
},
{
  id: 2,
  title: "Project Two",
  description: "The first project.",
  goal: 150,
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCC4squwzXz2nJjoLg54HZI__bsl39JUc6NQ&usqp=CAU",
  is_open: false,
  date_created: "2020-03-20T14:22:23.382748Z",
  owner: 1,
},
{
  id: 3,
  title: "Project Three",
  description: "The third project.",
  goal: 150,
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToJey2FR2kEDYmQSQZFMwo0ia0s34xMvFxZA&usqp=CAU",
  is_open: false,
  date_created: "2020-03-20T14:22:23.382748Z",
  owner: 1,
}]
export const oneProject = {
  id: 1,
  title: "Project One",
  description: "The first project.",
  goal: 150,
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBiZqcusG9Zso2DImkYWMDsIgB7MgDlz7XYkHABszLSk4qes1aG-zeb-EztZl_d_Zd-so&usqp=CAU",
  is_open: false,
  date_created: "2020-03-20T14:22:23.382748Z",
  owner: 1,
  pledges: [{
    id: 1,
    amount: 100,
    comment: "A comment for the pledge",
    anonymous: false,
    supporter: 3,
    project_id: 1,
  }]
};