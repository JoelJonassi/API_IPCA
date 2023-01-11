# Ficheiros Json

### Legenda:
- #-Chave primária
- ##-Chave estrangeira
- ###-Chave Composta

## buildings
- #idBuilding : Int
- ##idSchool : Int
- name : String

## schools
- #idSchool : Int
- name : String

## classrooms
- #idClassroom : Int
- ##idSchool : Int
- name: String
- lotation : Int

## periods
- #idPeriod : Int
- name : String
- initialTime : Long
- finalTime : Long

## courses
- ###idCourse:  Int
- ###idSchool : Int
- ###idPeriod : Int
- ##idUser : Int    -> Diretor do curso
- name : String

## grades
- #idGrade : Int
- name : String

## daysOfWeek
- #idDayOfWeek: Int
- name :  String


## usersSchedules 
- ##idUserSubject : Int
- ###idSchedule : Int  
- ###idCourse : Int
- ###idGrade : Int
- ###idClassRoom : Int

## schedules
- #idSchedule : Int
- ##idDayOfWeek : Int
- initialTime : Long
- duration : Long

## subjects
- #idSubject : Int
- ##idUser : int   -> Diretor da cadeira
- subject : String
- ects: Int

## usersSubjects
- #idUserSubject : Int
- ##idSubject : Int
- ##idUser : Int  

## typesUsers
- #idTypeUser : Int
- name : String

## users
- #idUser : Int
- ##idTypeUser : Int
- name : String
- email : String
- password : String
