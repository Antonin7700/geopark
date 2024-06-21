pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building the HTML project...'
                // Insérez ici les étapes de build si nécessaires (par exemple, npm install, build scripts, etc.)
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying HTML files...'
                // Copiez les fichiers HTML vers votre serveur web ou un dossier accessible
                sh 'cp -r * /var/www/html' // Exemple pour copier les fichiers à /var/www/html
            }
        }
    }

    post {
        always {
            echo 'Pipeline finished!'
            // Insérez ici d'autres actions post-build si nécessaires
        }
    }
}
