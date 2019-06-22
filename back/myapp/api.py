from myapp.models import Parent
from myapp.models import Media
from myapp.models import Child
from myapp.models import Achievements

from rest_framework import viewsets, permissions
from .serializers import ParentSerializer
from .serializers import MediaSerializer
from .serializers import ChildSerializer
from .serializers import AchievementsSerializer


class ParentViewSet(viewsets.ModelViewSet):
    serializer_class = ParentSerializer

    def get_queryset(self):
        queryset = Parent.objects.all()
        email = self.request.query_params.get("email", None)
        password = self.request.query_params.get("password", None)
        # print(self.request.data, email, password)
        # print(self.request.query_params, email, password)
        return queryset.filter(email=email, password=password)


class MediaViewSet(viewsets.ModelViewSet):
    serializer_class = MediaSerializer

    def get_queryset(self):
        queryset = Media.objects.all()
        role = self.request.query_params.get("role", None)
        return queryset.filter(role=role)


class ChildViewSet(viewsets.ModelViewSet):
    serializer_class = ChildSerializer

    def get_queryset(self):
        queryset = Child.objects.all()
        parent_id = self.request.query_params.get("parent_id", None)
        return queryset.filter(parent_id=parent_id)


class AchievementsViewSet(viewsets.ModelViewSet):
    serializer_class = AchievementsSerializer

    def get_queryset(self):
        queryset = Achievements.objects.all()
        child_id = self.request.query_params.get("child_id", None)
        language_letters_level = self.request.query_params.get(
            "language_letters_level", None)
        language_animals_level = self.request.query_params.get(
            "language_animals_level", None)
        language_planets_level = self.request.query_params.get(
            "language_planets_level", None)
        if(child_id):
            return queryset.filter(language_letters_level=language_letters_level, language_animals_level=language_animals_level, language_planets_level=language_planets_level, child_id=child_id)
        else:
            return Achievements.objects.all()
