pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building the HTML project...'
                // Insérez ici les étapes de build si nécessaires (par exemple, npm install, build scripts, etc.)
            }
        }
    post {
        always {
            echo 'Pipeline finished!'
            // Insérez ici d'autres actions post-build si nécessaires
        }
    }
}
