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


# THEMATIQUE: Développement d'une application Front end avec le Framework Angular, création de nœuds avec Minikube et mise en place de son pipeline CI/CD avec GitLab et Jenkins

## Introduction (Contexte)

Le marché tchadien des jeux vidéo est de plus en plus croissant de marques telles que Sony, Microsoft importées pour l’essentiel de Dubaï (Emirats Arabes Unis) qui constituent l’écosystème des jeux vidéo importés. La société de jeux souhaite faire la promotion de ses services en ligne via une application sécurisée. 
A cet effet, elle sollicite notre expertise.
Compte tenu des enjeux, nous présentons quelques hypothèses suivantes :
-	Une solution sécurisée conçu avec le Framework Angular et avec un langage informatique tel que JavaScript.
-	Une solution sécurisée conçu avec le Framework Symfony et avec un langage informatique tel que PHP.

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

![1756298497731](https://github.com/user-attachments/assets/12227aca-2970-4ee1-88ac-68a2e757f08e)

#### - Fiche de Cockburn user case

![1756297156872](https://github.com/user-attachments/assets/4634773d-24a0-4aa8-a2d7-31283976736d)

### c) Sécurité dans Angular

Angular intègre de manière native des processus avancés de protection contre les attaques les plus répandues connues sous le nom de Cross-Site Scripting (XSS), ainsi que des attaques sous les noms d’injection SQL et de Cross Site Request Forgery (CSRF).

### d) Présentation de l’application

Notre application est disponible en ligne à travers le lien suivant : https://angularguegueit-app.web.app/

![1756298507517](https://github.com/user-attachments/assets/6201314f-66be-434b-a698-a901ac33c6b9)

## B) Création de nœuds avec Minikube

#### Etape 1: 
Nous allons tout d’abord créer le Dockerfile et taper la commande "docker build –t my-angular-dev ." qui nous permet de créer une image Docker à partir du Dockerfile
situé dans le répertoire courant (.).

![1756298516500](https://github.com/user-attachments/assets/ffb86cac-0b7e-4f71-b9af-9f47add664db)

#### Etape 2: 
Ensuite, nous allons taper la commande "docker run –d –it –p 4201:4200 my-angulardev" qui nous permet d’exécuter un conteneur à partir de l’image Docker nommée «myangular-dev».
Nous avons donc notre conteneur appelé «sleepy_bhabha» présent sur notre Docker Desktop.

![1756298524290](https://github.com/user-attachments/assets/7f8a5c9d-ad3a-461d-822e-0ac455547133)

Nous avons donc notre conteneur appelé «sleepy_bhabha» présent sur notre Docker Desktop.
![1756298531834](https://github.com/user-attachments/assets/cc7e847e-c0d1-423f-9aea-ed0349512017)

#### Etape 3: 
Ensuite, nous allons créer le fichier deployment.yaml et taper les commandes "docker tag mon-express-app1 malloumdavid/myangularapp" qui nous permet d’ajouter un nouveau nom (tag) à une image Docker existante et "docker login" qui nous permet de nous authentifier auprès de notre Docker Hub.

![1756298539063](https://github.com/user-attachments/assets/e52d2065-658c-43d6-9d63-cf91d91bf9de)

#### Etape 4: 
Ensuite, nous allons taper la commande "docker push malloumdavid/myangularapp" qui nous permet d’effectuer le push de l’image Docker locale vers notre Docker Hub. Nous avons donc notre image docker présent sur notre Docker Hub.

![1756298547007](https://github.com/user-attachments/assets/65b47bd1-ce0d-4927-a2d9-79e27f6bd473)

Nous avons donc notre image docker présent sur notre Docker Hub.

![1756298555358](https://github.com/user-attachments/assets/0fadb269-8965-49a6-8519-f1a4c730a2be)


#### Etape 5 : 
Ensuite, nous allons modifier le fichier deployment.yaml et taper la commande "minikube start - -nodes=3 –p multinode" qui nous permet de démarrer un cluster Kubernetes local avec Minikube, en spécifiant les 3 nœuds dans le cluster (1 master + 2 workers) et un profil nommé «multinode». 

![1756298566689](https://github.com/user-attachments/assets/820a1fb7-f822-4cf3-bd75-0f0ee5a967a3)

#### Etape 6: 
Et enfin, nous allons taper la commande "kubectl get nodes" qui nous permet lister tous les nœuds d’un cluster Kubernetes, avec des informations de base sur chacun d'eux. Nous avons donc les 3 nœuds présents sur notre Docker Desktop.

![1756298576556](https://github.com/user-attachments/assets/29da5e81-f0b7-4fb6-8b17-0bd86db45636)

Nous avons donc les 3 nœuds présents sur notre Docker Desktop.

![1756298599664](https://github.com/user-attachments/assets/9c0d7941-826c-479d-92f2-52aef8ab71fa)

## C) Mise en place d’un pipeline CI/CD avec GitLab et Jenkins

Nous avons tout d'abord créé 3 instances  ec2 (prod, staging et review) sur AWS, ensuite nous avons visualiser ces instances ec2 sur MobaXterm, ensuite nous avons utilisé GitLab pour transformer les configurations du DockerFile obtenu en langage shell, effectuer le push de notre code sur notre GitHub et sur notre GitLab, effectuer des configurations de sécurité avec notre Docker Hub et sur base64 pour la clé publique et enfin nous avons modifié l'éditeur de pipeline en fonction des résultats obtenus afin de cliquer sur le bouton «Commit changes».

![1758024418966](https://github.com/user-attachments/assets/70b61a71-81a1-42ac-a9ec-e717b1a2e2d7)

![1758024437577](https://github.com/user-attachments/assets/f3ae674a-7b2b-4c00-9c5c-75edfaa539ed)

![1758024448804](https://github.com/user-attachments/assets/e5e9284c-6650-47a7-85d4-a30bf6b0d22b)

![1758024466767](https://github.com/user-attachments/assets/37ce191e-8648-4769-bbf5-1b2dace0514f)

![1758024477133](https://github.com/user-attachments/assets/19bbdfd3-f4ff-4388-a591-bae2e8d81464)

![1758024485980](https://github.com/user-attachments/assets/a53a14f9-2850-42e6-af12-9cc682c31a33)

![1758024494009](https://github.com/user-attachments/assets/f4991291-7602-4a7a-b182-284d09b0c970)

Pour le cas de JenKins, nous avons procédé différemment avec toujours les memes intances ec2 utilisées.

![1751882194674](https://github.com/user-attachments/assets/8e9b8b43-8451-477e-8aa9-2f72215e9737)

![1751882226279](https://github.com/user-attachments/assets/6c962006-911a-4388-a7cb-f7e884337866)

## Conclusion

En définitive, nous pouvons affirmer que le choix du Framework Angular pour développer l’application était la meilleure option parce qu’il est basé sur le langage JavaScript qu’on peut utiliser en Front end comme en Back end, et il nous permet également de consommer moins de ressources en production par rapport à une même application écrit en langage PHP par exemple.
