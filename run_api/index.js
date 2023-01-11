/**
 * Project : Smart Rooms
 * Date : 30/10/2022
 * Authors : Joel Jonassi
 *          Rui Alves
 *          José Macedo
 * brief :  Script que permite simular uma api rest com todos os ficheiros ".json".
 */

const buildings = require('../buildings.json');
const classrooms = require('../classrooms.json');
const courses = require('../courses.json');
const daysOfWeek = require('../daysOfWeek.json');
const grades = require('../grades.json');
const periods = require('../periods.json');
const schedules = require('../schedules.json');
const schools = require('../schools.json');
const subjects = require('../subjects.json');
const typesUsers = require('../typesUsers.json');
const users = require('../users.json');
const usersSchedules = require('../usersSchedules.json');
const usersSubjects = require('../usersSubjects.json');

module.exports = () => ({
  buildings: buildings,      
  classrooms : classrooms,       
  courses :courses,      
  daysOfWeek :  daysOfWeek,         
  grades : grades ,                          
  periods :  periods ,                       
  schedules :  schedules ,                            
  schools : schools ,     
  subjects :  subjects ,
  typesUsers :  typesUsers ,      
  users :  users ,           
  usersSchedules : usersSchedules,        
  usersSubjects  : usersSubjects ,           
});