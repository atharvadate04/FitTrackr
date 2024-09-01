from django.contrib.auth.models import User
from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view(['POST'])
def signup(request):
    data = request.data
    username = data.get('username')
    password = data.get('password')
    email = data.get('email')

    user = User.objects.create_user(username=username, password=password, email=email)
    user.save()

    return Response({'message': 'User created successfully'})
