// Clé API
const API_KEY = "api_key=ec2aaa95f9c918b23ca41fc9e156d76f";
// Base de l'url de requette
const BASE_URL = "https://api.themoviedb.org/3";

//Variable contenant la langue, par défaut à English
var LANGUAGE = ""

//URL de requêtes des pages principales (sans filtres)
const URL_FILMS = BASE_URL+"/discover/movie?sort_by=popularity.desc&"+API_KEY;
const URL_SERIES = BASE_URL+"/discover/tv?sort_by=popularity.desc&"+API_KEY;
const URL_TREND = BASE_URL+"/trending/all/day?"+API_KEY;

//Initialiser la première page à la page Trending
var URL_COURANT = URL_TREND

//URL de base pour construire la requettes des images
const IMG_URL = 'https://image.tmdb.org/t/p/w500';

//URL de Requêtes pour la barre de recherche en fonction de la page
const SearchFilm='/search/movie?'
const SearchSerie='/search/tv?'
const SearchPerson='/search/person?'
const SearchTrend ='/search/multi?'

//Intialisation de la barre de recherche sur la recherche des films
var searchURL = BASE_URL + SearchTrend +API_KEY;

const main = document.getElementById('main'); //Balise qui continent les containers des films et series (contenu de la page)
const overlayContent = document.getElementById('overlay-content'); //
var activeSlide = 0;
var totalVideos = 0;

//Liste des id et genres de films de différentes langues, générées par une requette de l'API
const genreFilmEN = [
      {
         "id":28,
         "name":"Action"
      },
      {
         "id":12,
         "name":"Adventure"
      },
      {
         "id":16,
         "name":"Animation"
      },
      {
         "id":35,
         "name":"Comedy"
      },
      {
         "id":80,
         "name":"Crime"
      },
      {
         "id":99,
         "name":"Documentary"
      },
      {
         "id":18,
         "name":"Drama"
      },
      {
         "id":10751,
         "name":"Family"
      },
      {
         "id":14,
         "name":"Fantasy"
      },
      {
         "id":36,
         "name":"History"
      },
      {
         "id":27,
         "name":"Horror"
      },
      {
         "id":10402,
         "name":"Music"
      },
      {
         "id":9648,
         "name":"Mystery"
      },
      {
         "id":10749,
         "name":"Romance"
      },
      {
         "id":878,
         "name":"Science Fiction"
      },
      {
         "id":10770,
         "name":"TV Movie"
      },
      {
         "id":53,
         "name":"Thriller"
      },
      {
         "id":10752,
         "name":"War"
      },
      {
         "id":37,
         "name":"Western"
      }
   ];
const genreFilmFR = [
     {
       "id":28,
       "name":"Action"
     },
     {
       "id":12,
       "name":"Aventure"
     },
     {
       "id":16,
       "name":"Animation"
     },
     {
       "id":35,
       "name":"Comédie"
     },
     {
       "id":80,
       "name":"Crime"
     },
     {
       "id":99,
       "name":"Documentaire"
     },
     {
       "id":18,
       "name":"Drame"
     },
     {
       "id":10751,
       "name":"Familial"
     },
     {
       "id":14,
       "name":"Fantastique"
     },
     {
       "id":36,
       "name":"Histoire"
     },
     {
       "id":27,
       "name":"Horreur"
     },
     {
       "id":10402,
       "name":"Musique"
     },
     {
       "id":9648,
       "name":"Mystère"
     },
     {
       "id":10749,
       "name":"Romance"
     },
     {
       "id":878,
       "name":"Science-Fiction"
     },
     {
       "id":10770,
       "name":"Téléfilm"
     },
     {
       "id":53,
       "name":"Thriller"
     },
     {
       "id":10752,
       "name":"Guerre"
     },
     {
       "id":37,
       "name":"Western"
     }
   ];
const genreFilmAR = [
      {
         "id":28,
         "name":"حركة"
      },
      {
         "id":12,
         "name":"مغامرة"
      },
      {
         "id":16,
         "name":"رسوم متحركة"
      },
      {
         "id":35,
         "name":"كوميديا"
      },
      {
         "id":80,
         "name":"جريمة"
      },
      {
         "id":99,
         "name":"وثائقي"
      },
      {
         "id":18,
         "name":"دراما"
      },
      {
         "id":10751,
         "name":"عائلي"
      },
      {
         "id":14,
         "name":"فانتازيا"
      },
      {
         "id":36,
         "name":"تاريخ"
      },
      {
         "id":27,
         "name":"رعب"
      },
      {
         "id":10402,
         "name":"موسيقى"
      },
      {
         "id":9648,
         "name":"غموض"
      },
      {
         "id":10749,
         "name":"رومنسية"
      },
      {
         "id":878,
         "name":"خيال علمي"
      },
      {
         "id":10770,
         "name":"فيلم تلفازي"
      },
      {
         "id":53,
         "name":"إثارة"
      },
      {
         "id":10752,
         "name":"حرب"
      },
      {
         "id":37,
         "name":"غربي"
      }
   ];
const genreFilmES = [
      {
         "id":28,
         "name":"Acción"
      },
      {
         "id":12,
         "name":"Aventura"
      },
      {
         "id":16,
         "name":"Animación"
      },
      {
         "id":35,
         "name":"Comedia"
      },
      {
         "id":80,
         "name":"Crimen"
      },
      {
         "id":99,
         "name":"Documental"
      },
      {
         "id":18,
         "name":"Drama"
      },
      {
         "id":10751,
         "name":"Familia"
      },
      {
         "id":14,
         "name":"Fantasía"
      },
      {
         "id":36,
         "name":"Historia"
      },
      {
         "id":27,
         "name":"Terror"
      },
      {
         "id":10402,
         "name":"Música"
      },
      {
         "id":9648,
         "name":"Misterio"
      },
      {
         "id":10749,
         "name":"Romance"
      },
      {
         "id":878,
         "name":"Ciencia ficción"
      },
      {
         "id":10770,
         "name":"Película de TV"
      },
      {
         "id":53,
         "name":"Suspense"
      },
      {
         "id":10752,
         "name":"Bélica"
      },
      {
         "id":37,
         "name":"Western"
      }
   ];

//Liste des id et genres de series de différentes langues, générées par une requette de l'API
const genreSerieEN = [
      {
         "id":10759,
         "name":"Action & Adventure"
      },
      {
         "id":16,
         "name":"Animation"
      },
      {
         "id":35,
         "name":"Comedy"
      },
      {
         "id":80,
         "name":"Crime"
      },
      {
         "id":99,
         "name":"Documentary"
      },
      {
         "id":18,
         "name":"Drama"
      },
      {
         "id":10751,
         "name":"Family"
      },
      {
         "id":10762,
         "name":"Kids"
      },
      {
         "id":9648,
         "name":"Mystery"
      },
      {
         "id":10763,
         "name":"News"
      },
      {
         "id":10764,
         "name":"Reality"
      },
      {
         "id":10765,
         "name":"Sci-Fi & Fantasy"
      },
      {
         "id":10766,
         "name":"Soap"
      },
      {
         "id":10767,
         "name":"Talk"
      },
      {
         "id":10768,
         "name":"War & Politics"
      },
      {
         "id":37,
         "name":"Western"
      }
   ];
const genreSerieES = [
      {
         "id":10759,
         "name":"Action & Adventure"
      },
      {
         "id":16,
         "name":"Animación"
      },
      {
         "id":35,
         "name":"Comedia"
      },
      {
         "id":80,
         "name":"Crimen"
      },
      {
         "id":99,
         "name":"Documental"
      },
      {
         "id":18,
         "name":"Drama"
      },
      {
         "id":10751,
         "name":"Familia"
      },
      {
         "id":10762,
         "name":"Kids"
      },
      {
         "id":9648,
         "name":"Misterio"
      },
      {
         "id":10763,
         "name":"News"
      },
      {
         "id":10764,
         "name":"Reality"
      },
      {
         "id":10765,
         "name":"Sci-Fi & Fantasy"
      },
      {
         "id":10766,
         "name":"Soap"
      },
      {
         "id":10767,
         "name":"Talk"
      },
      {
         "id":10768,
         "name":"War & Politics"
      },
      {
         "id":37,
         "name":"Western"
      }
   ];
const genreSerieFR = [{"id":10759,"name":"Action & Adventure"},{"id":16,"name":"Animation"},{"id":35,"name":"Comédie"},{"id":80,"name":"Crime"},{"id":99,"name":"Documentaire"},{"id":18,"name":"Drame"},{"id":10751,"name":"Familial"},{"id":10762,"name":"Kids"},{"id":9648,"name":"Mystère"},{"id":10763,"name":"News"},{"id":10764,"name":"Reality"},{"id":10765,"name":"Science-Fiction & Fantastique"},{"id":10766,"name":"Soap"},{"id":10767,"name":"Talk"},{"id":10768,"name":"War & Politics"},{"id":37,"name":"Western"}];
const genreSerieAR = [{"id":10759,"name":"حركة ومغامرة"},{"id":16,"name":"رسوم متحركة"},{"id":35,"name":"كوميديا"},{"id":80,"name":"جريمة"},{"id":99,"name":"وثائقي"},{"id":18,"name":"دراما"},{"id":10751,"name":"عائلي"},{"id":10762,"name":"أطفال"},{"id":9648,"name":"غموض"},{"id":10763,"name":"أخبار"},{"id":10764,"name":"واقع"},{"id":10765,"name":"خيال علمي وفانتازيا"},{"id":10766,"name":"أوبرا صابونية"},{"id":10767,"name":"حوار"},{"id":10768,"name":"حرب وسياسة"},{"id":37,"name":"غربي"}];

//Gestion de la barre de navigation entre le contenu possible
const trendPage = document.getElementById("Trend")
const filmsPage = document.getElementById("Films")
const seriesPage = document.getElementById("Series")
const actorsPage = document.getElementById("Actors")

//Ajout du style lumière rose sur la page selectionnée, par défaut sur Trending
trendPage.classList.add('selectedPage');

//Gestion de la pagination du contenu renvoyé par les requêtes
const precedente = document.getElementById('precedente')
const suivante = document.getElementById('suivante')
const actuelle = document.getElementById('actuelle')
var pageActuelle = 1; //index de la première page
var pageSuivante = 2; // index de la page suivante
var pagePrecedente = 3; // index de la page précédente
var lastUrl = ''; //L'url de la dernière page chargée
var totalPages = 200; //On défini le nombre max de pages à 200, l'api renvoie 500

//Gestion du choix de la langues et événements liés
var select = document.getElementById('langselect');
//event de changement de langue
select.addEventListener('change', (event) => {
  //Au changement de langue on défnie la varibale langue sur celle choisie par l'utilisateur
  LANGUAGE = "&language="+event.target.value;
  getContent(URL_COURANT+LANGUAGE); //On actualise le contenu de la page

  //En fonction de la page on affiche ou non le filtres des genres
  if (URL_COURANT.includes("tv")){
    setGenre();
    searchURL = BASE_URL + SearchSerie +API_KEY+LANGUAGE;
  }
  else if (URL_COURANT.includes("/movie")){
    setGenre();
    searchURL = BASE_URL + SearchFilm +API_KEY+LANGUAGE;
  }
  else if(URL_COURANT.includes("trend")){
    searchURL = BASE_URL + SearchTrend +API_KEY+LANGUAGE;
  }
});

getContent(URL_COURANT); //Remplissage de la première page à partir de la constante declarée en haut

//#################### Gestion de filtre par genre ###############
const filtreGenre = document.getElementById('tags'); //récupération de la balise contenant les genre sur le document
var selectedGenre = []; //Tableau qui contient les genres selectionnés par l'utilisateur

//Récupération des filtres de genre déclarés en haut (récupérés à partir d'une requete de l'api en ajoutant l'option &language=XX à la fin)
function setGenre(genreSerie,genreFilm) {
    filtreGenre.innerHTML= '';

    //Si on est sur la page des séries alors on affiche uniquement les filtres es séries
    if(URL_COURANT.includes("/tv") && !URL_COURANT.includes("/movie")){
      displayGenreSerie().forEach(genre => {
          const t = document.createElement('div');
          t.classList.add('tag');
          t.id=genre.id;
          t.innerText = genre.name;

          //Si un utilisateur choisis un filtre on l'ajoute dans le tableau selected si il n'y ai pas déjà, sinon on le retire
          t.addEventListener('click', () => {
              if(selectedGenre.length == 0){
                  selectedGenre.push(genre.id);
              }else{
                  if(selectedGenre.includes(genre.id)){
                      selectedGenre.forEach((id, idx) => {
                          if(id == genre.id){
                              selectedGenre.splice(idx, 1);
                          }
                      })
                  }else{
                      selectedGenre.push(genre.id);
                  }
              }
              //Requete de récupération de séries avec les filtres selectionnés
              getContent(URL_COURANT + '&with_genres='+encodeURI(selectedGenre.join(',')));
              //On change le style pour repérer facilement les filtres selectionnés
              SelectedGenreStyle();
          })
          //On ajoute ces éléments dans le docuement pour qu'ils soient visibles
          filtreGenre.append(t);
      })
    }
    //On refait la même chose avec les films
    else {
      displayGenreFilm().forEach(genre => {
          const t = document.createElement('div');
          t.classList.add('tag');
          t.id=genre.id;
          t.innerText = genre.name;
          t.addEventListener('click', () => {
              if(selectedGenre.length == 0){
                  selectedGenre.push(genre.id);
              }else{
                  if(selectedGenre.includes(genre.id)){
                      selectedGenre.forEach((id, idx) => {
                          if(id == genre.id){
                              selectedGenre.splice(idx, 1);
                          }
                      })
                  }else{
                      selectedGenre.push(genre.id);
                  }
              }
              getContent(URL_COURANT + '&with_genres='+encodeURI(selectedGenre.join(',')));
              SelectedGenreStyle();

          })
          filtreGenre.append(t);
      })
    }
}

//Retourne la bonne liste de genre de films en fonction de la langue
function displayGenreFilm(){
  if (LANGUAGE.includes("fr"))return genreFilmFR;
  else if (LANGUAGE.includes("ar"))return genreFilmAR;
  else if (LANGUAGE.includes("es"))return genreFilmES;
  else return genreFilmEN;
}

//Retourne la bonne liste de genre de series en fonction de la langue
function displayGenreSerie(){
  if (LANGUAGE.includes("fr"))return genreSerieFR;
  else if (LANGUAGE.includes("ar"))return genreSerieAR;
  else if (LANGUAGE.includes("es"))return genreSerieES;
  else return genreSerieEN;
}

//Changement de couleur à la selection d'un filtre
function SelectedGenreStyle() {
  const tags = document.querySelectorAll('.tag');
  tags.forEach(tag => {
      tag.classList.remove('highlight')
  })
  retireFiltresGenre();
  if(selectedGenre.length !=0){
    selectedGenre.forEach(id => {
        const hightlightedTag = document.getElementById(id);
        hightlightedTag.classList.add('highlight');
    })
  }
}



//#################### Récupération des données de l'api avec une requette et
function getContent(url){
  lastUrl=url;
  //On fetch l'url qu'on a demandé sur la page, il s'agit d'une requete qui retourne un fichier Json avec des données dedans,
  //On passe ces données à une autre fonction qui les traite et prend ce dont elle a besoin pour aafficher le contenu de la page demandée
  fetch(url).then(res => res.json()).then(data => {
    if(data.results.length!=0){
      //Cas d'une série
      if(URL_COURANT.includes("/tv") && !URL_COURANT.includes("/movie")){
        console.log(LANGUAGE);
        console.log(URL_COURANT);
        //On appelle la fonction d'affichage des séries dans des container
        showSeries(data.results);
        //On met à jour la pagination
        pageActuelle = data.page;
        pageSuivante = pageActuelle + 1;
        pagePrecedente = pageActuelle - 1;
        totalPages = data.total_pages;
        actuelle.innerText = pageActuelle;
        //
        filtreGenre.scrollIntoView({behavior : 'smooth'})
      }
      //Cas d'un film
      else if (URL_COURANT.includes("/movie") && !URL_COURANT.includes("/tv")) {
        //On appelle la fonction d'affichage des films dans des containers
        showMovies(data.results);
        //On met à jour la pagination
        pageActuelle = data.page;
        pageSuivante = pageActuelle + 1;
        pagePrecedente = pageActuelle - 1;
        totalPages = data.total_pages;
        actuelle.innerText = pageActuelle;

        filtreGenre.scrollIntoView({behavior : 'smooth'});
      }
      //Cas de mélange serie et film (Trend)
      else {
        //on appelle la bonne fonction pour afficher le mélange
        showTrend(data.results);
        pageActuelle = data.page;
        pageSuivante = pageActuelle + 1;
        pagePrecedente = pageActuelle - 1;
        totalPages = data.total_pages;
        actuelle.innerText = pageActuelle;
        filtreGenre.scrollIntoView({behavior : 'smooth'});
        console.log(LANGUAGE);
        console.log(URL_COURANT);
      }
    }
    //Si la requete ne renvoie rien un message d'erreur s'affiche
    else{
      main.innerHTML=`<H1>Aucun résultat ne correspond à votre recherche.</H1><br>
                      <img class="logo" src="assets/img/logo2.png" alt="Logo2">`
    }
  })
}

//Traitement des données de films retournées par l'api et création des containers remplis
function showMovies(data) {
    //On vide le contenu
    main.innerHTML = '';
    //on traite les données json et on récupère les données qui nous intéressent pour construire et remplir notre container
    data.forEach(movie => {
        const {title, poster_path, vote_average, overview, id} = movie;
        const movieEl = document.createElement('div');
        movieEl.classList.add('movie');
        //Construction du container
        movieEl.innerHTML = `
             <img src="${IMG_URL+poster_path}" alt="${title}">
             <div class="movie-info">
                 <h3>${title}</h3>
                 <span class="${couleurNote(vote_average)}">${vote_average}</span>
             </div>
             <div class="overview">
                 <h3>Overview</h3>
                 ${overview}
                 <button class="voir-plus" id="${id}">Voir plus</button>
             </div>
        `
        //Ajout du container dans le document
        main.appendChild(movieEl);
        //Ajout de l'event de clique sur le bouton "Voir-Plus" pour afficher l'overlay
        document.getElementById(id).addEventListener('click', () => {
          openNav(movie,"movie")
        })
    })
}
//De la meme façon que les films, traitement des données de séries retournées par l'api et création des containers remplis,seule différence le nom des champs
function showSeries(data) {
    main.innerHTML = '';
    data.forEach(serie => {
        const {name,original_name, poster_path, vote_average, overview, id} = serie;
        const serieEl = document.createElement('div');
        serieEl.classList.add('movie');
        serieEl.innerHTML = `
             <img src="${IMG_URL+poster_path}" alt="${name}">
             <div class="movie-info">
                 <h3>${original_name}</h3>
                 <span class="${couleurNote(vote_average)}">${vote_average}</span>
             </div>
             <div class="overview">
                 <h3>Overview</h3>
                 ${overview}
                 <button class="voir-plus" id="${id}">Voir plus</button>
             </div>
        `
        main.appendChild(serieEl);
        document.getElementById(id).addEventListener('click', () => {
          openNav(serie,"tv")
        })
    })
}

//De la meme façon que les films et séries, traitement des données de Trend retournées par l'api et création des containers remplis,seule différence le nom des champs
function showTrend(data) {
    main.innerHTML = '';
    data.forEach(trend => {
        const {original_title, original_name, media_type, poster_path, vote_average, overview, id} = trend;
        const trendEl = document.createElement('div');
        trendEl.classList.add('movie');
        //Si c'est une série on indique les bons attributs
        if(media_type=="tv"){
          trendEl.innerHTML = `
          <img src="${IMG_URL+poster_path}" alt="${original_name}">
          <div class="movie-info">
          <h3>${original_name}</h3>
          <span class="${couleurNote(vote_average)}">${vote_average}</span>
          </div>
          <div class="overview">
          <h3>Overview</h3>
          ${overview}
          <button class="voir-plus" id="${id}">Voir plus</button
          </div>
          `
        }
        //Si c'est un film on indique les bons attributs
        else {
          trendEl.innerHTML = `
          <img src="${IMG_URL+poster_path}" alt="${original_title}">
          <div class="movie-info">
          <h3>${original_title}</h3>
          <span class="${couleurNote(vote_average)}">${vote_average}</span>
          </div>
          <div class="overview">
          <h3>Overview</h3>
          ${overview}
          <button class="voir-plus" id="${id}">Voir plus</button>
          </div>
          `
        }
        main.appendChild(trendEl);
        if(media_type=="tv"){
          document.getElementById(id).addEventListener('click', () => {
            openNav(trend,"tv")
          })
        }
        else {
          document.getElementById(id).addEventListener('click', () => {
            openNav(trend,"movie")
          })
        }
    })
}

//Detection de la couleur de la note du film
function couleurNote(vote) {
    if(vote>= 8){
        return 'green'
    }else if(vote >= 5){
        return "orange"
    }else{
        return 'red'
    }
}

//#################### Gestion de la barre de recherche ###############################//
const form = document.getElementById("form");
const search = document.getElementById("search");

form.addEventListener('submit',(e)=>{
  e.preventDefault();// éviter l'exécution par defaut de la fonction si l'utilisaeur de donne pas explicitement une valeur

  const queryRecherche = search.value; //récupération du query recherché

  //On affiche les données retournée par la requette de recherche en fonction de la page et langue selectionnées
  if(queryRecherche) {
    getContent(searchURL+"&query="+queryRecherche+LANGUAGE);   //On affiche les données retournée par la requette de recherche
  }
  //Si la valeur du query est nulle on affiche l'url courant

  else{
    getContent(URL_COURANT);
  }

})


//#################### Boutton suppression de filtres #################################
function retireFiltresGenre(){
    let retireFiltresGenre = document.getElementById('supprimerFiltre');
    if(retireFiltresGenre){
        if(selectedGenre.length==0){
          setGenre();
          getContent(URL_COURANT);
        }
        retireFiltresGenre.classList.add('supprimer')
    }else{
        let clear = document.createElement('div');
        clear.classList.add('tag','supprimer');
        clear.id = 'supprimerFiltre';
        clear.innerText = 'X';
        clear.addEventListener('click', () => {
            selectedGenre = [];
            setGenre();
            getContent(URL_COURANT);
        })
        filtreGenre.append(clear);
    }
}

//#################### GESTION DE LA PAGINATION #######################

//evenement clique sur la fleche précédent
precedente.addEventListener('click', () => {
  if(pagePrecedente > 0){
    changementDePage(pagePrecedente);
  }
})

//evenement clique sur la fleche suivant
suivante.addEventListener('click', () => {
  if(pageSuivante <= totalPages){
    changementDePage(pageSuivante);
  }
})

//change le contenu de la page actuelle par le contenu de la page suivante en conservant les memes filtres et options
function changementDePage(page){
  let urlSplit = lastUrl.split('?');
  let queryParams = urlSplit[1].split('&');
  let key = queryParams[queryParams.length -1].split('=');
  if(key[0] != 'page'){
    let url = lastUrl + '&page='+page
    getContent(url);
  }else{
    key[1] = page.toString();
    let a = key.join('=');
    queryParams[queryParams.length -1] = a;
    let b = queryParams.join('&');
    let url = urlSplit[0] +'?'+ b
    getContent(url);
  }
}

//#################### Gestion de la navigation #######################
//evenement clique sur Trending sur la barre de navigation
trendPage.addEventListener('click', () => {
  //on retire les filtres
  filtreGenre.innerHTML=``
  //on change le style sur la barre de navigation
  trendPage.classList.add('selectedPage');
  seriesPage.classList.remove('selectedPage');
  filmsPage.classList.remove('selectedPage');
  //On met à jour l'URL COurant en indiquant celui de la requete trend + le langage si l'utilisatur en a selectionné
  URL_COURANT=URL_TREND+LANGUAGE;
  //afficher le contenu de la page
  getContent(URL_COURANT);
  //mise à jour de la requete de recherche
  searchURL = BASE_URL + SearchTrend +API_KEY+LANGUAGE;
})
//evenement clique sur Films sur la barre de navigation
filmsPage.addEventListener('click', () => {
  //on change les styles de la barre
  trendPage.classList.remove('selectedPage');
  seriesPage.classList.remove('selectedPage');
  filmsPage.classList.add('selectedPage');
  //On met à jour l'urlcourant et url de recherche
  URL_COURANT=URL_FILMS+LANGUAGE;
  searchURL = BASE_URL + SearchFilm +API_KEY+LANGUAGE;
  //On affiche le contenu et les filtres
  getContent(URL_COURANT);
  setGenre();
})

//evenement clique sur Series sur la barre de navigation, même manip que films
seriesPage.addEventListener('click', () => {
  trendPage.classList.remove('selectedPage');
  filmsPage.classList.remove('selectedPage');
  seriesPage.classList.add('selectedPage');

  URL_COURANT=URL_SERIES+LANGUAGE;
  searchURL = BASE_URL + SearchSerie +API_KEY+LANGUAGE;

  getContent(URL_COURANT);
  setGenre();
})

actorsPage.addEventListener('click', () => {
  //A FAIRE
  //AFFICHAGE DES ACTEURS ET LEURS INFORMATIONS
  //RECHERCHE PAR NOM D'ACTEUR
  //RECHERCHE FILMS ASSOCIES
})


//#################### Gestion de l'overlay
/* Open when someone clicks on the span element */
function openNav(object,type) {
  let id = object.id;
  fetch(BASE_URL + '/'+type+'/'+id+'/videos?'+API_KEY).then(res => res.json()).then(videoData => {
    if(videoData){
      document.getElementById("myNav").style.width = "100%";
      if(videoData.results.length > 0){
        var embed = [];
        videoData.results.forEach((video, idx) => {
          let {name, key, site} = video

          if(site == 'YouTube'){

            embed.push(`
              <iframe width="560" height="315" src="https://www.youtube.com/embed/${key}" title="${name}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          `)
          }
        })
        overlayContent.innerHTML = embed.join('')
      }else{
        overlayContent.innerHTML = `<h1>No Results Found</h1>`
      }
    }
  })
}

//Retire tous les filtres d'un coup au clique sur le bouton
function fermerNav() {
  document.getElementById("myNav").style.width = "0%";
}
