pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building the project...'
                // Exécutez vos étapes spécifiques au projet ici
                sh 'npm install'   // Exemple: installer les dépendances Node.js
                sh 'npm run build' // Exemple: construire le projet avec npm
            }
        }
    }

    post {
        success {
            echo 'Pipeline finished successfully!'
            archiveArtifacts artifacts: '**/target/*.jar', allowEmptyArchive: true
            // Archiver les fichiers .jar générés dans le répertoire 'target'
        }
        failure {
            echo 'Pipeline failed!'
            mail to: 'admin@example.com', subject: 'Pipeline Failed', body: "Le pipeline a échoué pour le projet XYZ."
            // Envoyer un e-mail en cas d'échec du pipeline
        }
        always {
            echo 'Pipeline finished!'
            cleanWs()
            // Nettoyer l'espace de travail à la fin du pipeline
        }
    }
}
