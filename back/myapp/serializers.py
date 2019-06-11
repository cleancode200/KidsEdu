from rest_framework import serializers
from myapp.models import Child
from myapp.models import Media
from myapp.models import Parent
from myapp.models import Achievements

class ParentSerializer(serializers.ModelSerializer):
 class Meta:
    model = Parent 
    fields='__all__'

class MediaSerializer(serializers.ModelSerializer):
  class Meta:
    model = Media 
    fields='__all__'

class ChildSerializer(serializers.ModelSerializer):
  class Meta:
    model = Child
    fields='__all__'
    
class AchievementsSerializer(serializers.ModelSerializer):
 class Meta:
    model = Achievements
    fields='__all__'
