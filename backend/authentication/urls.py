from rest_framework import routers

from authentication.views import UserViewSet, ProfileViewSet,\
    RegistrationViewSet


router = routers.SimpleRouter()
router.register(r'accounts/register', RegistrationViewSet, 'register')
router.register(r'accounts/users', UserViewSet, 'users')
router.register(r'accounts/profiles', ProfileViewSet, 'profiles')

urlpatterns = router.urls
