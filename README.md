# API PIRE 2 PIRE

## Description
TP: develop the backend part of an online training platform called pire2pire.com.

### Context
design an API for a future online training center.
The courses are organized into modules.

Each module is characterized by a module number in the form of Semantic Versioning,
A title, an educational objective, A content (texts, images and videos),
a duration in hours, one or more tags and an author.

A module can be part of one or more trainings, like a "Git basic commands" module could be part of a "Frontend Javascript" and "DevOps" training, see more.

A module can contain a text and/or an image and/or a video.

Learners can register for one or more courses, they can choose not to follow certain modules if they already present, for example, the skills. In other words, they can arbitrarily validate the modules of their choice with one click.

Each learner is assessed for each module and has an end of module status (OK/KO).

The training is considered complete when all the modules have been validated.

Each learner is characterized by a unique registration number, a name, a first name, an address and a date of birth.

A trainer is the author of a module for a given training, each trainer is characterized by a code, a name, a first name..

### Tech used

project using ***NestJS*** [<img width=16 alt="NestJs logo" src="https://d33wubrfki0l68.cloudfront.net/e937e774cbbe23635999615ad5d7732decad182a/26072/logo-small.ede75a6b.svg">](https://nestjs.com/)\
database under **Prostgresql** [<img width=16 alt="Prostgresql logo" src="https://www.postgresql.org/media/img/about/press/elephant.png">](https://www.postgresql.org/)\
connection with **typeORM** [<img width=50 alt="typeORM logo" src="https://github.com/typeorm/typeorm/raw/master/resources/logo_big.png">](https://typeorm.io/)

## Contact

Donovan Caron - [email](Caron.donovan1@outlook.fr)\
Project Link: [https://github.com/TheChaosStar/Pire2Pire](https://github.com/TheChaosStar/Pire2Pire)
