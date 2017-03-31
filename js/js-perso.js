/* Permet de focus sur le terminal au chargement
 de la page */
$(document).ready(function () {
    $("#terminal").focus();
});

//cacher le contenu de la div hidden
$('#hidden').hide();

$(document).keypress(function (touche) {
    /*si le code ASCII de la touche est égal à 13
     (la touche entrée) */    
     if (touche.which == 13) {
        /* stocker dans la variable resultat le code
         html contenu dans la div resultat */
        var resultat = $('#resultat').html();
        // atttribution d'une valeur à la variable enTete
        var enTete = 'cv:\\alexandremasse>';
        /* stocker dans la variable saisie la valeur 
         de ce qu'il y a dans le champs input terminal */
        var saisie = $('#terminal').val(); 
        /* concaténation pour mettre ce qui a été
         saisie à la suite de l'entete */
        enTete = enTete + saisie;
        // le terminal est alors vide
        $('#terminal').val('');
       /* saut de ligne après le resultat et ajout 
       de l'entete, et c'est repartit !*/
        resultat = resultat + '<br>' + enTete;
        // évaluation de la saisie
        switch (saisie) {   
            //AIDE
            case 'aide':
            case 'Aide':
            case 'AIDE':
            case 'help':
            case 'HELP':
                /*La variable resultat2 prend la valeur
                 du contenu Html de la div aide*/
                var resultat2 = $('#aide').html();
                //On ajoute resultat2 à la suite de resultat
                resultat = resultat + resultat2;
                /*La div resultat prend le contenu 
                html de la variable resultat*/
                $('#resultat').html(resultat);
                //La div resultat est maintenant visible
                $('#resultat').show();
                break;
                
                
            //PHOTO
            case 'photo':
            case 'Photo':
            case 'PHOTO':
                var resultat2 = $('#photo').html();
                resultat = resultat + resultat2;
                $('#resultat').html(resultat);
                $('#resultat').show();
                break;
                
                
            //COMPETENCES
            case 'competence':
            case 'competences':
            case 'Competence':
            case 'Competences':
            case 'COMPETENCE':
            case 'COMPETENCES':
            case 'compétencnoe':
            case 'compétences':
            case 'Compétence':
            case 'Compétences':
                var resultat2 = $('#competence').html();
                resultat = resultat + resultat2;
                $('#resultat').html(resultat);
                $('#resultat').show();
                break;
            
            
            //LANGAGES
            case 'langage':
            case 'langages':
            case 'Langage':
            case 'Langages':
            case 'LANGAGE':
            case 'LANGAGES':
                var resultat2 = $('#langage').html();
                resultat = resultat + resultat2;
                $('#resultat').html(resultat);
                $('#resultat').show();
                break;
                
            
            //FORMATION
            case 'formation':
            case 'formations':
            case 'Formation':
            case 'Formations':
            case 'FORMATION':
            case 'Formation':
                var resultat2 = $('#formation').html();
                resultat = resultat + resultat2;
                $('#resultat').html(resultat);
                $('#resultat').show();
                break;
                
                
            //EXPERIENCE
            case 'experience':
            case 'experiences':
            case 'Experience':
            case 'Experiences':
            case 'EXPERIENCE':
            case 'EXPERIENCES':
            case 'expérience':
            case 'expériences':
            case 'Expérience':
            case 'Expériences':
                var resultat2 = $('#experience').html();
                resultat = resultat + resultat2;
                $('#resultat').html(resultat);
                $('#resultat').show();
                break;
              
                
            //DIPLOME
            case 'diplome':
            case 'diplomes':
            case 'Diplome':
            case 'Diplomes':
            case 'DIPLOME':
            case 'DIPLOMES':
            case 'diplôme':
            case 'diplômes':
            case 'Diplôme':
            case 'Diplômes':
                var resultat2 = $('#diplome').html();
                resultat = resultat + resultat2;
                $('#resultat').html(resultat);
                $('#resultat').show();
                break;
                
                
            //INTERETS
            case 'interet':
            case 'interets':
            case 'Interet':
            case 'Interets':
            case 'INTERET':
            case 'INTERETS':
            case 'intérêt':
            case 'intérêts':
            case 'Intérêt':
            case 'Intérêts':
                var resultat2 = $('#interet').html();
                resultat = resultat + resultat2;
                $('#resultat').html(resultat);
                $('#resultat').show();
                break;
                
              
                
            //CV
            case 'CV':
            case 'cv':
                var resultat2 = $('#cv').html();
                resultat = resultat + resultat2;
                $('#resultat').html(resultat);
                $('#resultat').show();
                break;
                
                
            //CONTACT
            case 'contact':
            case 'Contact':
            case 'CONTACT':
                var resultat2 = $('#contact').html();
                resultat = resultat + resultat2;
                $('#resultat').html(resultat);
                $('#resultat').show();
                break;
                
             
            
            //TWITTER  
            case 'TWITTER':
            case 'twitter':
            case 'Twitter':
                var resultat2 = $('#twitter').html();
                //Timeline Twitter
                var twitter = '<a class="twitter-timeline" data-width="300" data-height="300" data-theme="dark" href="https://twitter.com/Alexandre_Masse"></a><script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script><br>'
                resultat = resultat + resultat2 + twitter;
                $('#resultat').html(resultat);
                $('#resultat').show();
                break;
                
                
            //LINKEDIN  
            case 'LINKEDIN':
            case 'Linkedin':
            case 'linkedin':
            case 'LinkedIn':
                var resultat2 = $('#linkedin').html();
                resultat = resultat + resultat2;
                $('#resultat').html(resultat);
                $('#resultat').show();
                break;
                
                
                
            //FLICKR
            case 'flickr':
            case 'Flickr':
            case 'FLICKR':
                var resultat2 = $('#flickr').html();
                resultat = resultat + resultat2;
                $('#resultat').html(resultat);
                $('#resultat').show();
                break;    
              
                
            //VIE
            case 'Le sens de la vie':
            case 'le sens de la vie':
                var resultat2 = $('#vie').html();
                resultat = resultat + resultat2;
                $('#resultat').html(resultat);
                $('#resultat').show();
                break;    
              
                
                
                
            //EFFACER
            case 'clear':
            case 'Clear':
            case 'CLEAR':
            case 'effacer':
            case 'Effacer':
            case 'EFFACER':
                $('#resultat').html('');
                break;
              
            //texte par default si commande pas valide
            default:
                resultat = resultat + "<br><br><br>/!\\ COMMANDE NON VALIDE /!\\<br><br>";
                $('#resultat').html(resultat);
                $('#resultat').show();
                break;
        }
        
        
        // permet de descendre automatiquement
        $('html, body').animate({
            scrollTop: $("#terminal").offset().top
        }, 1);
        
        // permet de refaire le focus sur le terminal
        $("#terminal").focus();
    }
});


