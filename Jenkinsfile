pipeline {
    agent any

    environment {
        IMAGE_NAME = 'real-devops-app'
        CONTAINER_NAME = 'my-running-app'
        APP_PORT = '8085'
    }

    stages {
        stage('Checkout SCM') {
            steps {
                echo 'Fetching Code from GitHub...'
            }
        }

        stage('Docker Build') {
            steps {
                echo 'Building Docker Image...'
                sh "docker build -t ${IMAGE_NAME}:${BUILD_NUMBER} -t ${IMAGE_NAME}:latest ."
            }
        }

        stage('Deploy Application') {
            steps {
                echo 'Deploying Container to Server...'
                // إيقاف الحاوية القديمة لو موجودة علشان نمنع خطأ الاسم والبورت
                sh "docker rm -f ${CONTAINER_NAME} || true"
                // تشغيل الحاوية الجديدة على بورت 8085
                sh "docker run -d --name ${CONTAINER_NAME} -p ${APP_PORT}:3000 ${IMAGE_NAME}:latest"
            }
        }
    }
}
