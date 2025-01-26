from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth.hashers import make_password
from .models import Usuario

@api_view(['GET'])
def example_view(request):
    return Response({"message": "Hola desde Django REST!"})

@api_view(["POST"])
def login(request):
    # Verifica que los datos vienen en el cuerpo de la solicitud
    email = request.data.get("email")
    password = request.data.get("password")
    users = Usuario.get.all()

    if not email or not password:
        return Response(
            {"error": "Faltan el correo o la contraseña."},
            status=status.HTTP_400_BAD_REQUEST,
        )

    # Simula la autenticación (reemplaza esto con tu lógica real)
    if email == "lucasbonzano60@gmail.com" and password == "123456":
        return Response({"message": "Inicio de sesión exitoso"}, status=status.HTTP_200_OK)

    return Response({"error": "Credenciales inválidas"}, status=status.HTTP_401_UNAUTHORIZED)

@api_view(["POST"])
def register(request):
    # Verifica que los datos vienen en el cuerpo de la solicitud
    data = request.data

    # Verificar campos obligatorios
    required_fields = ['username', 'email', 'password', 'birth_date', 'phone_number']
    for field in required_fields:
        if field not in data:
            return Response({"error": f"El campo '{field}' es obligatorio."}, status=status.HTTP_400_BAD_REQUEST)
    
    try:
        # Crear usuario
        user = Usuario.objects.create(
            username=data['username'],
            email=data['email'],
            password=make_password(data['password']),
            birth_date=data['birth_date'],
            phone_number=data['phone_number'],
        )
        return Response({"message": "Usuario creado exitosamente."}, status=status.HTTP_201_CREATED)
    except Exception as e:
        return Response({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)

