Fazer import do postmanColection no Postman, este ficheiro contém uma collection de todos "Gets" genéricos da API IPCA.

# Students

### Legenda:
- #-Chave primária
- ##-Chave estrangeira
- ###-Chave Composta

## users - Fazer Login na App
- #idUser : Int
- ##idTypeUser : Int
- name : String
- email : String
- password : String

## usersSubjects - Lista de UCs do utilizador
- #idUserSubject : Int
- ##idSubject : Int
- ##idUser : Int   - com o idUser já é possivel ver as UCs do utilizador

## subjects  - O nome da Disciplina e o diretor da UC
- #idSubject : Int
- ##idUser : int   -> Diretor da cadeira
- subject : String
- ects: Int


## usersSchedules - Horário do utilizador
- ##idUserSubject : Int
- ###idSchedule : Int  
- ###idCourse : Int
- ###idGrade : Int
- ###idClassRoom : Int

## MySchedule - Especificação do horário
- #idSchedule : Int
- ##idDayOfWeek : Int
- initialTime : Long
- duration : Long

## daysOfWeek - Dias da semana
- #idDayOfWeek: Int
- name :  String

## Myclassrooms - Salas em que decorrem as UCS do utilizador
- #idClassroom : Int
- ##idSchool : Int
- name: String
- lotation : Int

## MySchool - A escola em que decorre a aula
- #idSchool : Int
- name : String

## MyGrade - Classe do aluno
- #idGrade : Int
- name : String

## MyCourse - O curso do aluno
- ###idCourse:  Int
- ###idSchool : Int
- ###idPeriod : Int
- ##idUser : Int    -> Diretor do curso
- name : String



# Torna especifico qm 
## periods
- #idPeriod : Int
- name : String
- initialTime : Long
- finalTime : Long

## daysOfWeek
- #idDayOfWeek: Int
- name :  String

## typesUsers
- #idTypeUser : Int
- name : String


# Teachers

### Legenda:
- #-Chave primária
- ##-Chave estrangeira
- ###-Chave Composta

## users - Fazer Login na App
- #idUser : Int
- ##idTypeUser : Int
- name : String
- email : String
- password : String

## usersSubjects - Lista de UCs do utilizador
- #idUserSubject : Int
- ##idSubject : Int
- ##idUser : Int   - com o idUser já é possivel ver as UCs do utilizador

## subjects  - O nome da Disciplina e o diretor da UC
- #idSubject : Int
- ##idUser : int   -> Diretor da cadeira
- subject : String
- ects: Int

## usersPresences - alunos presentes
- #idUserPresence : Int
- ##idPresence : Int
- ##idUserSubject : Int

## presences  - Especifica a presenção "presente" ou "ausente"
- #idPresence : Int
- name : String

## usersSchedules - Horário do utilizador
- ###idUserPresence : Int  
- ###idSchedule : Int  
- ###idCourse : Int
- ###idGrade : Int
- ###idClassRoom : Int

## MySchedule - Especificação do horário
- #idSchedule : Int
- ##idDayOfWeek : Int
- initialTime : Long
- duration : Long

## daysOfWeek - Dias da semana
- #idDayOfWeek: Int
- name :  String


## Myclassrooms - Salas em que decorrem as UCS que um utilizador leciona
- #idClassroom : Int
- ##idSchool : Int
- name: String
- lotation : Int

## MySchool - A escola em que decorre a aula
- #idSchool : Int
- name : String

## MyGrade - Classe 
- #idGrade : Int
- name : String

## MyCourse - O cursos que o utlizador leciona
- ###idCourse:  Int
- ###idSchool : Int
- ###idPeriod : Int
- ##idUser : Int    -> Diretor do curso
- name : String

# Especifica os dados

## periods
- #idPeriod : Int
- name : String
- initialTime : Long
- finalTime : Long

## daysOfWeek
- #idDayOfWeek: Int
- name :  String

## typesUsers
- #idTypeUser : Int
- name : String