from rest_framework import viewsets, mixins
from rest_framework import permissions
from django.contrib.auth.models import User

from utils.permissions import IsOwner
from authentication.models import Profile
from authentication.serializers import ProfileSerializer, UserSerializer,\
    RegistrationSerializer


class RegistrationViewSet(viewsets.GenericViewSet, mixins.CreateModelMixin):
    serializer_class = RegistrationSerializer

    def get_queryset(self):
        return User.objects.filter(username=self.request.user)


class UserViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = (permissions.IsAuthenticated,)


class ProfileViewSet(mixins.ListModelMixin, mixins.RetrieveModelMixin,
                     mixins.UpdateModelMixin, viewsets.GenericViewSet):
    serializer_class = ProfileSerializer
    permission_classes = (IsOwner,)

    def get_queryset(self):
        return Profile.objects.filter(user=self.request.user)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)
