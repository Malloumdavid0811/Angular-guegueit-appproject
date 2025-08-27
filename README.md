# AngularGuegueitApp

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.10.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.


# THEMATIQUE: Développement d'une application Front end avec le Framework Angular et mise en place de son pipeline CI/CD avec GitLab et Jenkins

## Introduction (Contexte)

Un français d’origine tchadienne a ouvert un magasin de vente de jeux vidéo dans son pays d’origine dénommé «GUEGUE IT». Vu les réalités de son pays d’origine par une quasi-absence d’Amazon pour le commerce en ligne et une connexion internet passable, il souhaiterait avoir une petite application sécurisée, qui consomme très peu de ressources en production afin de l’utiliser pendant la période de promotion qu’il a fixé pour les vacances d’été entre mai et août.

## A) Développement d’une application Front end avec le Framework Angular

### a) Le cahier de charges

#### - Présentation de la société
Présentation de l’activité de la société : L’activité principale de la société «GUEGUE IT» est de vendre des consoles de Playstation 4, de XBOX ONE et des CD de jeux vidéo.
Expression des besoins : Besoin de réalisation d’une petite application afin de l’utiliser pendant la période de promotion fixé pour les vacances d’été entre mai et août.
Explication du rôle de l’application dans la stratégie de la société : Le rôle de l’application dans la stratégie de la société est de passer l’information sur les
prix des CD de jeux vidéo pendant la période de promotion.
Conception : Conception de la solution et identification des risques.
Indication de la date butoir pour la fin du projet : Mise en ligne de l'application escomptée après le 18/05/2025.

#### - Cible à laquelle s’adresse l’application
Cible : La cible toute personne souhaitant acheter des CD de jeux vidéo moins chères.
Lieu de la cible : De manière générale, la cible se trouve sur internet, à travers des canaux numériques qu’elle fréquente tels que les réseaux sociaux.

#### - Aspects d’ergonomie et de graphisme
Couleurs principales de l’application : Les couleurs principales de l’application sont le vert et le blanc.
Utilisation du logo : Le logo utilisé est celui de la société, au niveau du côté gauche de l’entête.
Police de caractère mise en place sur l’application : La police de caractère mise en place sur l’application est diverse et variée.
Design ou effets particuliers : Pour le cas du design ou des effets particuliers, nous utiliserons HTML 5 pour le contenu, CSS 3 pour la présentation, Bootstrap 5 pour rendre l’application responsive et TypeScript (JavaScript) pour amener des animations sur l’application.

#### - Aspect fonctionnel de l’application
L’application requiert une page web où le visiteur peut visualiser les différents CD de jeux vidéo de PS4 et XBOX ONE qui sont à vendre. Au niveau de la présentation de chaque CD, nous avons une petite fonction d’incrémentation et de décrémentation au niveau du nombre afin de voir le coût, sachant également que tous ces CD ont le même prix. Et au niveau du pied de page, nous avons le contact du vendeur.

#### - Aspects techniques de l’application
Solution technique : La solution technique que nous privilégions pour le développement de l’application est l’utilisation du Framework Angular de Google à travers le logiciel open source Visual Studio Code qui est un environnement de développement intégré ou IDE.
Cas du nom de domaine et de l’hébergement : Le nom de domaine et l’hébergement s’obtiendra avec Firebase de Google qui est un ensembled'outils pour l'hébergement et le développement d'applications mobiles et web.

### b) Modélisation UML

UML (Unified Modeling Language ou Langage de modélisation unifié) est un langage de modélisation fondé sur le concept objet. L’objectif d’UML est de fournir une notation standard utilisable dans le développement des systèmes informatiques basés sur l’objet.

#### Diagramme de cas d’utilisation Visiteur

#### - Fiche de Cockburn user case
Titre : Diagramme de cas d’utilisation Visiteur.
Résumé : Nous avons la représentation du visiteur qui peut naviguer sur l’application, en faisant l’incrémentation et la décrémentation du nombre de CD en fonction du prix.
Acteur : Visiteur.
Motivation : L’acteur veut naviguer sur l’application.
Pré-condition(s) : Aucune.
Post-condition(s) : Aucune. Exceptions : Aucune.
Remarques ergonomiques (éventuellement) : Aucune.
Contraintes non fonctionnelles (éventuellement) : Aucune.
Scénario Nominal : [Enchaînement de Cockburn].

### c) Sécurité dans Angular

Angular intègre de manière native des processus avancés de protection contre les attaques les plus répandues connues sous le nom de Cross-Site Scripting (XSS), ainsi que des attaques sous les noms d’injection SQL et de Cross Site Request Forgery (CSRF).

### d) Présentation de l’application

Notre application est disponible en ligne à travers le lien suivant : https://angularguegueit-app.web.app/

## B) Création de nœuds avec Minikube

#### Etape 1: 
Nous allons tout d’abord créer le Dockerfile et taper la commande "docker build –t my-angular-dev ." qui nous permet de créer une image Docker à partir du Dockerfile
situé dans le répertoire courant (.).

#### Etape 2: 
Ensuite, nous allons taper la commande "docker run –d –it –p 4201:4200 my-angulardev" qui nous permet d’exécuter un conteneur à partir de l’image Docker nommée «myangular-dev».
Nous avons donc notre conteneur appelé «sleepy_bhabha» présent sur notre Docker Desktop.

#### Etape 3: 
Ensuite, nous allons créer le fichier deployment.yaml et taper les commandes "docker tag mon-express-app1 malloumdavid/myangularapp" qui nous permet d’ajouter un nouveau nom (tag) à une image Docker existante et "docker login" qui nous permet de nous authentifier auprès de notre Docker Hub.

#### Etape 4: 
Ensuite, nous allons taper la commande "docker push malloumdavid/myangularapp" qui nous permet d’effectuer le push de l’image Docker locale vers notre Docker Hub. Nous avons donc notre image docker présent sur notre Docker Hub.

#### Etape 5 : 
Ensuite, nous allons modifier le fichier deployment.yaml et taper la commande "minikube start - -nodes=3 –p multinode" qui nous permet de démarrer un cluster Kubernetes local avec Minikube, en spécifiant les 3 nœuds dans le cluster (1 master + 2 workers) et un profil nommé «multinode». 

#### Etape 6: 
Et enfin, nous allons taper la commande "kubectl get nodes" qui nous permet lister tous les nœuds d’un cluster Kubernetes, avec des informations de base sur chacun d'eux. Nous avons donc les 3 nœuds présents sur notre Docker Desktop.

## C) Mise en place d’un pipeline CI/CD avec GitLab et Jenkins

Avec GitLab par exemple, nous avons transformé les configurations du DockerFile en langage shell, modifié le pipeline editor en fonction des résultats obtenus et cliquer sur le bouton «Commit changes».
![1751850786793](https://github.com/user-attachments/assets/304115f2-8891-48d7-9d5f-665b15f2edce)
![1747410196826](https://github.com/user-attachments/assets/0f1cde37-495a-4cdc-b2e3-1a201fa6a047)

Pour le cas de JenKins, nous avons procédé différemment avec toujours les memes intances ec2 utilisées.
![1751882194674](https://github.com/user-attachments/assets/8e9b8b43-8451-477e-8aa9-2f72215e9737)
![1751882226279](https://github.com/user-attachments/assets/6c962006-911a-4388-a7cb-f7e884337866)

## Conclusion

En définitive, nous pouvons affirmer que le choix du Framework Angular pour développer l’application était la meilleure option parce qu’il est basé sur le langage JavaScript qu’on peut utiliser en Front end comme en Back end, et il nous permet également de consommer moins de ressources en production par rapport à une même application écrit en langage PHP par exemple.
