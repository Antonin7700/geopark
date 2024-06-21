pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building the project...'
                // Ajoutez ici les étapes spécifiques à votre projet, par exemple :
                // sh 'npm install'   (si vous utilisez npm)
                // sh 'npm run build' (pour construire votre projet)
                // ou d'autres commandes selon votre cas
            }
        }
    }

    post {
        always {
            echo 'Pipeline finished!'
            // Ajoutez ici d'autres actions post-build si nécessaires
        }
    }
