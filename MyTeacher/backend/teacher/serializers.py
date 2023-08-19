from rest_framework import serializers
from django.forms import ValidationError

from teacher.models import Professor
from teacher.models import Aula

class ProfessorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Professor
        # fields = ('id', 'nome', 'valor_hora', 'descricao', 'foto')
        fields = '__all__'

class CadastrarAulaSerializer(serializers.Serializer):
    email = serializers.EmailField(max_length=255)
    nome = serializers.CharField(max_length=100)

    def validate_nome(self, value):
        if len(value) < 3:
            raise ValidationError("deve ter pelo menos três caracteres")
        return value

class AulaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Aula
        fields = '__all__'
